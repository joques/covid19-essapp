import ballerina/mongodb;
import ballerina/http;
import ballerina/log;
import ballerina/io;
import ballerina/time;

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
		time:Time? theLatestTime = time:currentTime();

		// fill the repsonse payload with the new content
		if (allData is error) {
			log:printError("An error occurred while pulling the latest statistics", err=allData);
		} else {
			json? theLatest = ();
			foreach var singleData in allData {
				io:println(singleData);
				io:println(singleData.date?.date);
				if(theLatest == null) {
					io:println("theLatest is null");
					theLatest = singleData;
					//theLatestTime = {time: singleData.date?.date, zone: noZoneValue};
				} else {
					//time:Time singleDataTime = {time: singleData.date?.date, zone: noZoneValue};
					//io:println("time at singleData");
					//io:println(singleDataTime);
					//io:println("time at theLatest");
					//io:println(theLatestTime);
				}
			}

			io:println("about to print out the value of theLatest");
			io:println(theLatest);

			latestResp.setJsonPayload(allData);

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
