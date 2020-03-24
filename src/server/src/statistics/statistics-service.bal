import ballerina/mongodb;
import ballerina/http;
import ballerina/log;
import ballerina/io;
import ballerina/time;
import ballerina/lang.'int as langint;

mongodb:ClientEndpointConfig  mongoConfig = {
	host: "localhost",
	dbName: "covid-nam",
	username: "",
	password: "",
	options: {sslEnabled: false, serverSelectionTimeout: 500}
};

mongodb:Client dbClient = check new (mongoConfig);

listener http:Listener apiListener2 = new (6549);

@http: ServiceConfig {
	basePath: "/covid/v1/statistics"
}
service awareness on apiListener2 {
	@http: ResourceConfig {
		methods: ["GET"],
		path: "/latest"
	}
	resource function getLatestStatistics(http:Caller caller, http:Request ltReq) {
		http:Response latestResp = new;

		// pull the latest news data
		var allData = dbClient->find("covidstats", ());

		time:TimeZone noZoneValue = {id: ""};
		time:Time theLatestTime = time:currentTime();

		// fill the repsonse payload with the new content
		if (allData is error) {
			log:printError("An error occurred while pulling the latest statistics", err=allData);
		} else {
			json theLatest = ();
			foreach var singleData in allData {
				io:println(singleData);
				time:Time singleDataTime = time:currentTime();
				var theDate = singleData.date;
				
				if (theDate is error) {
					io:println("there seems to be an error with the date");
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
							}
						}
					}
				}
			}

			io:println("about to print out the value of theLatest");
			io:println(theLatest);
			
			string|error convertedDateToStr = time:format(theLatestTime, time:TIME_FORMAT_RFC_1123);
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
			io:println(finalRecovered);

			int finalDead = 0;
			var deadVar = theLatest.dead;
			if (deadVar is int) {
				finalDead = deadVar;
			}
			io:println(finalDead);
			
			int finalSuspected = 0;
			var suspectedVar = theLatest.suspected;
			if (suspectedVar is int) {
				finalSuspected = suspectedVar;
			}
			io:println(finalSuspected);
			
			int finalConfirmed = 0;
			var confirmedVar = theLatest.confirmed;
			if (confirmedVar is int) {
				finalConfirmed = confirmedVar;
			}
			io:println(finalConfirmed);

			int finalWorldwide = 0;
			var worldwideVar = theLatest.worldwide;
			if (worldwideVar is int) {
				finalWorldwide = worldwideVar;
			}
			io:println(finalWorldwide);

			json latestCopy = {"date": dateStrCopy, "recovered": finalRecovered, "dead": finalDead, "suspected": finalSuspected, "confirmed": finalConfirmed, "worldwide": finalWorldwide};
			io:println(latestCopy);

			latestResp.setJsonPayload(latestCopy);

			// send the response to the caller and log errors
			var respResult = caller->respond(latestResp);
			if (respResult is error) {
				log:printError(respResult.reason(), respResult);
			}
		}
	}

	@http: ResourceConfig {
		methods: ["GET"],
		path: "/allstats"
	}
	resource function getAllStatistics(http:Caller caller, http:Request defReq) {
		http:Response allStatResp = new;

		// pull the official virus definition data
		var allStatData = dbClient->find("covidstats", ());

		if (allStatData is error) {
			log:printError("An error occurred while pulling all statistics", err=allStatData);
		} else {
			// fill the response payload with the new content
			allStatResp.setJsonPayload(allStatData);

			// send the response to the caller and log errors
			var respResult = caller->respond(allStatResp);
			if (respResult is error) {
				log:printError(respResult.reason(), respResult);
			}
		}
	}  
}
