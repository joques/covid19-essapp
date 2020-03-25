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
							io:println("theLatest is null...");
						} else {
							io:println("theLatest is not null... We can do some comparisons here...");
							io:println("singleData....");
							io:println(singleData._id);
							io:println(time:format(singleDataTime, "yyyy-MM-dd'T'HH:mm:ss.SSSZ"));


							io:println("The latest....");
							io:println(theLatest._id);
							io:println(time:format(theLatestTime, "yyyy-MM-dd'T'HH:mm:ss.SSSZ"));

							//io:println("object " + singleData._id + " with time " + time:format(singleDataTime, "yyyy-MM-dd'T'HH:mm:ss.SSSZ"));

							//io:println("object " + theLatest._id + " with time " + time:format(theLatestTime, "yyyy-MM-dd'T'HH:mm:ss.SSSZ"))

							if (singleDataTime.time > theLatestTime.time) {
								io:println("singleData is older than the latest...");
								theLatest = singleData;
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

			int finalWorldwide = 0;
			var worldwideVar = theLatest.worldwide;
			if (worldwideVar is int) {
				finalWorldwide = worldwideVar;
			}

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
		path: "/all"
	}
	resource function getAllStatistics(http:Caller caller, http:Request defReq) {
		http:Response allStatResp = new;

		// pull the official virus definition data
		var allStatData = dbClient->find("covidstats", ());

		if (allStatData is error) {
			log:printError("An error occurred while pulling all statistics", err=allStatData);
		} else {
			// fill the response payload with the new content
			//will cleanup the date and 
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
				
				json singleItemData = {"date": finalDateStr, "recovered": finalRecovered, "dead": finalDead, "suspected": finalSuspected, "confirmed": finalConfirmed, "worldwide": finalWorldwide}; 
				
				finalStatData.push(singleItemData); 
			}
			allStatResp.setJsonPayload(finalStatData);

			// send the response to the caller and log errors
			var respResult = caller->respond(allStatResp);
			if (respResult is error) {
				log:printError(respResult.reason(), respResult);
			}
		}
	}  
}
