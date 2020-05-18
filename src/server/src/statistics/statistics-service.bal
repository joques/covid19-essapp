import ballerina/mongodb;
import ballerina/http;
import ballerina/log;
import ballerina/io;
import ballerina/time;
import ballerina/lang.'int as langint;
import ballerina/docker;

final string[] regionids = ["erongo", "hardap", "kavango-east", "kavango-west", "khomas", "kunene", "ohangwena", "omaheke", "omusati", "oshana", "oshikoto", "otjozondjupa", "zambezi", "karas"];

mongodb:ClientConfig  mongoConfig = {
	host: "172.17.0.1",
	port: 27017,
	username: "",
	password: "",
	options: {sslEnabled: false, serverSelectionTimeout: 500}
};

mongodb:Client dbClient = checkpanic new (mongoConfig);
mongodb:Database dBase = checkpanic dbClient->getDatabase("covid-nam");
mongodb:Collection statCol = checkpanic dBase->getCollection("covidstats");

@docker:Expose {}
listener http:Listener apiListener2 = new (6549, config = {
	secureSocket: {
        keyStore: {
            path: "../../resources/cov19cert.p12",
            password: "covpass91"
        }
    }
});

@docker:Config {
	name: "stats",
	tag: "v1.0"
}

@http: ServiceConfig {
	basePath: "/covid/v1/statistics",
	cors: {
				allowOrigins: ["https://covidservices.nust.na:6549"],
				allowCredentials: false,
				allowHeaders: ["*"],
				maxAge: 84900
    }
}
service statistics on apiListener2 {
	@http: ResourceConfig {
		methods: ["GET"],
		path: "/latest"
	}
	resource function getLatestNationalStatistics(http:Caller caller, http:Request ltReq) {
		http:Response latestResp = new;

		// pull the latest news data
		var allData = statCol->find({level: "national"});

		// fill the repsonse payload with the new content
		if (allData is error) {
			log:printError("An error occurred while pulling the statistics", err=allData);
		} else {
			json respContent = processLatestStat(allData);

			latestResp.setJsonPayload(respContent);

			// send the response to the caller and log errors
			var respResult = caller->respond(latestResp);
			if (respResult is error) {
				log:printError(respResult.reason(), respResult);
			}
		}
	}

	@http: ResourceConfig {
		methods: ["GET"],
		path: "/all"
	}
	resource function getAllNationalStatistics(http:Caller caller, http:Request defReq) {
		http:Response allStatResp = new;

		// pull the official virus definition data
		var allStatData = statCol->find({level: "national"});

		if (allStatData is error) {
			log:printError("An error occurred while pulling all statistics", err=allStatData);
		} else {
			json[] respContent = processAllStats(allStatData);

			allStatResp.setJsonPayload(respContent);

			// send the response to the caller and log errors
			var respResult = caller->respond(allStatResp);
			if (respResult is error) {
				log:printError(respResult.reason(), respResult);
			}
		}
	}

	@http: ResourceConfig {
		methods: ["GET"],
		path: "/regional/{regionid}"
	}
	resource function getLatestRegionalStatistics(http:Caller caller, http:Request hReq, string regionid) {
		http:Response latestResp = new;

		// pull the latest news data
		var allData = statCol->find({level: "regional", regionid: regionid});

		if (allData is error) {
			io:println("there was an error pulling the data from the statistics store...");
			log:printError("An error occurred while pulling the latest statistics", err=allData);
		} else {
			json respContent = processLatestStat(allData);

			latestResp.setJsonPayload(respContent);

			// send the response to the caller and log errors
			var respResult = caller->respond(latestResp);
			if (respResult is error) {
				log:printError(respResult.reason(), respResult);
			}
		}
	}

	@http: ResourceConfig {
		methods: ["GET"],
		path: "/regions"
	}
	resource function getLatestAllLatestRegional(http:Caller caller, http:Request hReq) {
		map<json> regionStats = pullRegionalStatistics();

		io:println("showing the result...");
		io:println(regionStats);

		http:Response regResp = new;
		regResp.setJsonPayload(regionStats);

		var respResult = caller->respond(regResp);
		if (respResult is error) {
			log:printError(respResult.reason(), respResult);
		}
	}

	@http: ResourceConfig {
		methods: ["GET"],
		path: "/aggregate"
	}
	resource function getLatestAggregate(http:Caller caller, http:Request hReq) {
		map<json> regionStats = pullRegionalStatistics();
		http:Response aggResp = new;

		var natData = statCol->find({level: "national"});
		if (natData is error) {
			log:printError("An error occurred while pulling the national statistics", err=natData);
		} else {
			json natStats = processLatestStat(natData);
			map<json> aggStats = {};
			aggStats["national"] = natStats;
			aggStats["regions"] = regionStats;

			aggResp.setJsonPayload(aggStats);

			var respResult = caller -> respond(aggResp);

			if (respResult is error) {
				io:println("an error occurred while sending the aggregate stats response");
				log:printError(respResult.reason(), respResult);
			}
		}
	}
}


function pullRegionalStatistics() returns map<json> {
	map<json> regionStats = {};

	foreach var regionid in regionids {
		var regStats = statCol->find({level: "regional", regionid: regionid});
		if (regStats is error) {
			log:printError(regStats.reason(), regStats);
			io:println("There was an error pulling stats for region ", regionid);
		} else {
			json curRegStat = processLatestStat(regStats);
			regionStats[regionid] = curRegStat;
		}
	}

	return regionStats;
}


function processLatestStat(json[] allData) returns json {
	time:TimeZone noZoneValue = {id: ""};
	time:Time theLatestTime = time:currentTime();

	json theLatest = ();

	foreach var singleData in allData {
		time:Time singleDataTime = time:currentTime();
		var theDate = singleData.date;

		if (theDate is error) {
			log:printError("An error occurred extracting a date from the mongodb document", err=theDate);
		} else {
			string dateString = theDate.toString();
			string theSubstr = dateString.substring(6, dateString.length());
			int|error numDate = langint:fromString(theSubstr);
			if (numDate is error) {
				log:printError("An error occurred csting a string into int for date extraction", err=numDate);
			} else {
				singleDataTime = {time: numDate, zone: noZoneValue};

				if(theLatest == null) {
					theLatest = singleData;
					theLatestTime = singleDataTime;
				} else {
					if (singleDataTime.time > theLatestTime.time) {
						theLatest = singleData;
						theLatestTime = singleDataTime;
					}
				}
			}
		}
	}

	string|error convertedDateToStr = time:format(theLatestTime, "yyyy-MM-dd'T'HH:mm:ss.SSSZ");
	string dateStrCopy = "";
	if (convertedDateToStr is error) {
		io:println("the date cannot be converted into a string");
	} else {
		dateStrCopy = convertedDateToStr;
	}

	io:println("printing latest data before sending...");

	int finalRecovered = 0;
	var recoveredVar = theLatest.recovered;
	if (recoveredVar is int) {
		finalRecovered = recoveredVar;
	}

	int finalDead = 0;
	var deadVar = theLatest.dead;
	if (deadVar is int) {
		finalDead = deadVar;
	}

	int finalSuspected = 0;
	var suspectedVar = theLatest.suspected;
	if (suspectedVar is int) {
		finalSuspected = suspectedVar;
	}

	int finalConfirmed = 0;
	var confirmedVar = theLatest.confirmed;
	if (confirmedVar is int) {
		finalConfirmed = confirmedVar;
	}

	int total_quarantined = 0;
	var quarantinedVar = theLatest.total_quarantined;
	if (quarantinedVar is error) {
		io:println("total_quarantined did not exist in this object");
	} else if (quarantinedVar is int) {
		total_quarantined = quarantinedVar;
	}

	int total_tested = 0;
	var testedVar = theLatest.total_tested;
	if (testedVar is error) {
		io:println("total_tested did not exist in this object");
	} else if (testedVar is int) {
		total_tested = testedVar;
	}

	int active_cases = 0;
	var activeVar = theLatest.active_cases;
	if (activeVar is error) {
		io:println("active_cases did not exist in this object");
	} else if (activeVar is int) {
		active_cases = activeVar;
	}

	int finalWorldwide = 0;
	var worldwideVar = theLatest.worldwide;
	if (worldwideVar is int) {
		finalWorldwide = worldwideVar;
	}

	json latestCopy = {"date": dateStrCopy, "recovered": finalRecovered, "dead": finalDead, "suspected": finalSuspected, "confirmed": finalConfirmed, "worldwide": finalWorldwide, "total_quarantined": total_quarantined, "total_tested": total_tested, "active_cases": active_cases};
	io:println(latestCopy);

	return latestCopy;
}

function processAllStats(json[] allStatData) returns json[] {
	json[] finalStatData = [];
	time:TimeZone noZoneValue = {id: ""};


	foreach var singleItem in allStatData {
		string finalDateStr = "";
		int finalRecovered = 0;
		int finalDead = 0;
		int finalSuspected = 0;
		int finalConfirmed = 0;
		int finalWorldwide = 0;

		var recoveredVar = singleItem.recovered;
		if (recoveredVar is int) {
			finalRecovered = recoveredVar;
		}

		var deadVar = singleItem.dead;
		if (deadVar is int) {
			finalDead = deadVar;
		}

		var suspectedVar = singleItem.suspected;
		if (suspectedVar is int) {
			finalSuspected = suspectedVar;
		}

		var confirmedVar = singleItem.confirmed;
		if (confirmedVar is int) {
			finalConfirmed = confirmedVar;
		}

		var worldwideVar = singleItem.worldwide;
		if (worldwideVar is int) {
			finalWorldwide = worldwideVar;
		}

		int total_quarantined = 0;
		var quarantinedVar = singleItem.total_quarantined;
		if (quarantinedVar is error) {
			io:println("total_quarantined did not exist in this object");
		} else if (quarantinedVar is int) {
			total_quarantined = quarantinedVar;
		}

		int total_tested = 0;
		var testedVar = singleItem.total_tested;
		if (testedVar is error) {
			io:println("total_tested did not exist in this object");
		} else if (testedVar is int) {
			total_tested = testedVar;
		}

		int active_cases = 0;
		var activeVar = singleItem.active_cases;
		if (activeVar is error) {
			io:println("active_cases did not exist in this object");
		} else if (activeVar is int) {
			active_cases = activeVar;
		}

		var theDate = singleItem.date;

		if (theDate is error) {
			log:printError("An error occurred extracting the date from a data item", err=theDate);
		} else {
			string dateString = theDate.toString();
			string theSubstr = dateString.substring(6, dateString.length());
			int|error numDate = langint:fromString(theSubstr);
			if (numDate is error) {
				log:printError("An error occurred csting a string into int for date extraction", err=numDate);
			} else {
				string|error convertedDateToStr = time:format({time: numDate, zone: noZoneValue}, "yyyy-MM-dd'T'HH:mm:ss.SSSZ");
				if (convertedDateToStr is error) {
					io:println("the date cannot be converted into a string");
				} else {
					finalDateStr = convertedDateToStr;
				}
			}
		}

		json singleItemData = {"date": finalDateStr, "recovered": finalRecovered, "dead": finalDead, "suspected": finalSuspected, "confirmed": finalConfirmed, "worldwide": finalWorldwide, "total_tested": total_tested, "total_quarantined": total_quarantined, "active_cases": active_cases};

		finalStatData.push(singleItemData);
	}

	io:println("printing the result for all before sending...");
	io:println(finalStatData);

	return finalStatData;
}
