import ballerina/http;
import ballerina/log;
import ballerina/io;

listener http:Listener apiListener1 = new (6547);

function loadAwarenessData(string awarenessPath) returns @tainted json {
	var rbc = io:openReadableFile(awarenessPath);

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

// local store with all awareness info
json awarenessDS = <@untainted> loadAwarenessData("../../resources/awareness.json");

@http: ServiceConfig {
	basePath: "/covid/v1/awareness"
}

service awareness on apiListener1 {
	@http: ResourceConfig {
		methods: ["GET"],
		path: "/latest"
	}
	resource function getLatestAwareness(http:Caller caller, http:Request ltReq) {
		http:Response latestResp = new;

		// pull the latest news data
		var latestData = awarenessDS?.latestnews;

		// fill the repsonse payload with the new content
		if (latestData is error) {
			log:printError("An error occurred while pulling the latest data from awareness", err=latestData);
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
		path: "/whatis"
	}
	resource function getCovidDefinition(http:Caller caller, http:Request defReq) {
		http:Response defResp = new;

		// pull the official virus definition data
		var covidDefJson = awarenessDS?.virusdef;

		if (covidDefJson is error) {
			log:printError("An error occurred while pulling the virus definition data from awareness", err=covidDefJson);
		} else {
			// fill the response payload with the new content
			defResp.setJsonPayload(covidDefJson);

			// send the response to the caller and log errors
			var respResult = caller->respond(defResp);
			if (respResult is error) {
				log:printError(respResult.reason(), respResult);
			}
		}
	}

	@http: ResourceConfig {
		methods: ["GET"],
		path: "/transmission"
	}
	resource function getTransmissionDetails(http:Caller caller, http:Request trReq) {
		http:Response transResp = new;

		// pull the transmission info
		var covidTransJson = awarenessDS?.transmission;

		if (covidTransJson is error) {
			log:printError("An error occurred while pulling the virus transmission info from awareness", err=covidTransJson);
		} else {
			// fill the response payload with the new content
			transResp.setJsonPayload(covidTransJson);

			// send the response to the caller
			var respResult = caller->respond(transResp);
			if (respResult is error) {
				log:printError(respResult.reason(), respResult);
			}
		}
	}

	@http: ResourceConfig {
		methods: ["GET"],
		path: "/treatment"
	}
	resource function getTreatmentInfo(http:Caller caller, http:Request tr1Req) {
		http:Response treatResp = new;

		// pull the treatment information
		var convidTreatJson = awarenessDS?.treatment;

		if (convidTreatJson is error) {
			log:printError("An error occurred while pulling the treatment info from awareness", err=convidTreatJson);
		} else {
			// fill the response payload with the new content
			treatResp.setJsonPayload(convidTreatJson);

			// send the response to the caller and log errors
			var respResult = caller->respond(treatResp);
			if (respResult is error) {
				log:printError(respResult.reason(), respResult);
			}
		}
	}

	@http: ResourceConfig {
		methods: ["GET"],
		path: "/tips"
	}
	resource function getSafetyTips(http:Caller caller, http:Request safReq) {
		http:Response tipResp = new;

		// load the safety tips from DB client
		var covidSafetyTipsJson = awarenessDS?.tips;

		if (covidSafetyTipsJson is error) {
			log:printError("An error occurred while pulling the safety tips from awareness", err=covidSafetyTipsJson);
		} else {
			// fill the response payload with the new content
			tipResp.setJsonPayload(covidSafetyTipsJson);

			// send response to caller and log errors
			var respResult = caller->respond(tipResp);
			if (respResult is error) {
				log:printError(respResult.reason(), respResult);
			}
		}
	}

	@http: ResourceConfig {
		methods: ["GET"],
		path: "/facts"
	}
	resource function getMythsAndFacts(http:Caller caller, http:Request trReq) {
		http:Response factResp = new;

		// pull the facts
		var factJson = awarenessDS?.facts;

		if (factJson is error) {
			log:printError("An error occurred while pulling the virus transmission info from awareness", err=factJson);
		} else {
			// fill the response payload with the new content
			factResp.setJsonPayload(factJson);

			// send the response to the caller
			var respResult = caller->respond(transResp);
			if (respResult is error) {
				log:printError(respResult.reason(), respResult);
			}
		}
	}
}
