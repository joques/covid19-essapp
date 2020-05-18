import ballerina/http;
import ballerina/log;
import ballerina/io;
import ballerina/docker;

map<http:WebSocketCaller> callerMap = {};


@docker:Expose{}
listener http:Listener newsWSEP = new(6548);

@http:WebSocketServiceConfig {
    path: "/ws/news",
    subProtocols: ["xml", "json"],
    idleTimeoutInSeconds: 120
}
service newsws on newsWSEP {
	resource function onOpen(http:WebSocketCaller caller) {
		io:println("New client connected...");
		string connID = caller.getConnectionId();
		callerMap[connID] = <@untainted> caller;
	}

	resource function onClose(http:WebSocketCaller caller, int statusCode, string reason){
		io:println("Existing client leaving...");
		string connID = caller.getConnectionId();
		_ = callerMap.remove(connID);
	}

	resource function onError(http:WebSocketCaller caller, error err) {
		log:printError("An error occurred", err);
	}
}


@docker:Expose {}
listener http:Listener apiListener1 = new (6547, config = {
	secureSocket: {
        keyStore: {
            path: "../../resources/cov19cert.p12",
            password: "covpass91"
        }
    }
});

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
json awarenessDS = <@untainted> loadAwarenessData("./data/awareness.json");

//adding docker confoguration
@docker:Config {
	name: "awareness",
	tag: "v1.0"
}

@docker:CopyFiles{
	files: [{sourceFile: "../../resources/awareness.json", target: "/home/ballerina/data/awareness.json"}]
}

@http: ServiceConfig {
	basePath: "/covid/v1/awareness",
	cors: {
        allowOrigins: ["https://covidservices.nust.na"],
        allowHeaders: ["*"]
    }
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
			io:println(latestData);
			latestResp.setJsonPayload(latestData);

			// send the response to the caller and log errors
			var respResult = caller->respond(latestResp);
			if (respResult is error) {
				log:printError(respResult.reason(), respResult);
			}
		}
	}

	@http:ResourceConfig {
		methods: ["POST"],
		path: "/breakingnews",
		body: "newsDetails"
	}
	resource function handleBreakingNews(http:Caller caller, http:Request nReq, json newsDetails) {
		var breakingNews = newsDetails.info;
		if (breakingNews is error) {
			log:printError(breakingNews.reason(), breakingNews);
		} else {
			string breakingNewsStr = breakingNews.toString();
			foreach var singleEntry in callerMap.entries() {
				var [entryKey, entryVal] = singleEntry;
				var res = entryVal->pushText(breakingNewsStr);
				if (res is error) {
					log:printError(res.reason(), res);
				}
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
			io:println("the def is here ...");
			io:println(covidDefJson);
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
	resource function getFacts(http:Caller caller, http:Request trReq) {
		http:Response factResp = new;

		// pull the facts
		var factJson = awarenessDS?.facts;

		if (factJson is error) {
			log:printError("An error occurred while pulling the virus transmission info from awareness", err=factJson);
		} else {
			// fill the response payload with the new content
			factResp.setJsonPayload(factJson);

			// send the response to the caller
			var respResult = caller->respond(factResp);
			if (respResult is error) {
				log:printError(respResult.reason(), respResult);
			}
		}
	}

	@http: ResourceConfig {
		methods: ["GET"],
		path: "/measures"
	}
	resource function getMeasures(http:Caller caller, http:Request trReq) {
		http:Response measureResp = new;

		// pull the facts
		var measureJson = awarenessDS?.measures;

		if (measureJson is error) {
			log:printError("An error occurred while pulling info related to the measures against the virus", err=measureJson);
		} else {
			// fill the response payload with the new content
			measureResp.setJsonPayload(measureJson);

			// send the response to the caller
			var respResult = caller->respond(measureResp);
			if (respResult is error) {
				log:printError(respResult.reason(), respResult);
			}
		}
	}

	@http: ResourceConfig {
		methods: ["GET"],
		path: "/myths"
	}
	resource function getMyths(http:Caller caller, http:Request trReq) {
		http:Response mythResp = new;

		// pull the facts
		var mythJson = awarenessDS?.myths;

		if (mythJson is error) {
			log:printError("An error occurred while pulling myths about the virus", err=mythJson);
		} else {
			// fill the response payload with the new content
			mythResp.setJsonPayload(mythJson);

			// send the response to the caller
			var respResult = caller->respond(mythResp);
			if (respResult is error) {
				log:printError(respResult.reason(), respResult);
			}
		}
	}

	@http: ResourceConfig {
		methods: ["GET"],
		path: "/casedefs"
	}
	resource function getCaseDefinisions(http:Caller caller, http:Request trReq) {
		http:Response caseResp = new;

		// pull the facts
		var caseJson = awarenessDS?.casedefs;

		if (caseJson is error) {
			log:printError("An error occurred while pulling case definitions about the virus", err=caseJson);
		} else {
			// fill the response payload with the new content
			caseResp.setJsonPayload(caseJson);

			// send the response to the caller
			var respResult = caller->respond(caseResp);
			if (respResult is error) {
				log:printError(respResult.reason(), respResult);
			}
		}
	}

	@http: ResourceConfig {
		methods: ["GET"],
		path: "/symptoms"
	}
	resource function getInfectionSymptoms(http:Caller caller, http:Request trReq) {
		http:Response sympResp = new;

		// pull the facts
		var sympJson = awarenessDS?.symptoms;

    io:println(sympJson);


		if (sympJson is error) {
			log:printError("An error occurred while pulling case definitions about the virus", err=sympJson);
		} else {
			// fill the response payload with the new content
			sympResp.setJsonPayload(sympJson);

			// send the response to the caller
			var respResult = caller->respond(sympResp);
			if (respResult is error) {
				log:printError(respResult.reason(), respResult);
			}
		}
	}

	@http: ResourceConfig {
		methods: ["GET"],
		path: "/testing"
	}
	resource function getTestingDetails(http:Caller caller, http:Request testingReq) {
		http:Response testingResp = new;

		//pull the testing detail content
		var testingJson = awarenessDS?.testing;

		io:println(testingJson);

		if (testingJson is error) {
			log:printError("An error occurred while pulling testing details from the json store", err=testingJson);
		} else {
			// fill the response payload with the content
			testingResp.setJsonPayload(testingJson);

			var respResult = caller->respond(testingResp);
			if (respResult is error) {
				log:printError(respResult.reason(), respResult);
			}
		}
	}
}
