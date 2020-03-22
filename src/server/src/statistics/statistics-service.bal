import ballerina/http;
import ballerina/log;
import ballerina/io;

listener http:Listener apiListener2 = new (6549);

function loadAllStats(string statPath) returns @tainted json {
	var rbc = io:openReadableFile(statPath);

	if (rbc is error) {
		log:printError("An error occurred while creating a byte channel", err=rbc);
		return {};
	} else {
		io:ReadableCharacterChannel rch = new (rbc, "UTF8");
		var jsonData = rch.readJson();
		var closeRes = rch.close();
		if (closeRes is error) {
			log:printError("An error occurred while closing the character channel", err=closeRes);
			return {};
		} else {
			if (jsonData is error) {
				log:printError("An error occurred while reading the JSON data", err=jsonData);
			} else {
				return jsonData;
			}
		}
	}
}

// local store with all stats
json statStore = <@untainted> loadAllStats("../../resources/statistics.json");

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
		var latestData = statStore?.latest;

		// fill the repsonse payload with the new content
		if (latestData is error) {
			log:printError("An error occurred while pulling the latest statistics", err=latestData);
		} else {
			latestResp.setJsonPayload(latestData);

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
		var allStatData = statStore?.allstats;

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
