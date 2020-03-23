import ballerina/mongodb;
import ballerina/http;
import ballerina/log;
import ballerina/io;
import ballerina/time;
import ballerina/lang.'int as langint;
//import ballerina/lang.'string as strings;

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
			json? theLatest = ();
			foreach var singleData in allData {
				io:println(singleData);
				time:Time singleDataTime = time:currentTime();
				var theDate = singleData.date;
				
				if (theDate is error) {
					io:println("there seems to be an error with the date");
				} else {
					string dateString = theDate.toString();
					string theSubstr = dateString.substring(6, dateString.length());
					io:println(theSubstr);
					int|error numDate = langint:fromString(theSubstr);
					if (numDate is error) {
						io:println("Spotted an error casting a string into an int");
					} else {
						singleDataTime = {time: numDate, zone: noZoneValue};
						io:println(theLatestTime);

						if(theLatest == null) {
							io:println("theLatest is null");
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

			latestResp.setJsonPayload(theLatest);

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
