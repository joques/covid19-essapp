import ballerina:http;
import ballerina/log;
import ballerina/io;
import wso2/mongodb;

listener http:Listener apiListener1 new (6547, host: "196.216.167.150");
endpoint mongodb:Client dbConn {
	dbName: "covid",
	username: "",
	password: "",
	options: {}
};

@http: ServiceConfig {
	basePath: "/covid/v1/awareness"
};

service awareness on apiListener1 {
	@http: ResourceConfig {
		methods: ["GET"],
		path: "/latest"
	}
	resource function getLatestAwareness(http:Caller caller, http:Request ltReq) {
		http:Response latestResp = new;

		// the content should come from the MongoDB client
		json latestData = {};

		// fill the repsonse payload with the new content
		latestResp.setJsonPayload(latestData);

		// send the response to the caller and log errors
		var respResult = caller->respond(latestResp);
		if (respResult is error) {
			log:printError(respResult.reason(), respResult);
		}
	}

	@http: ResourceConfig {
		methods: ["GET"],
		path: "/whatis"
	}
	resource function getCovidDefinition(http:Caller caller, http:Request defReq) {
		http:Response defResp = new;

		// will get this from dbConn later
		json covidDefJson = {};

		// fill the response payload with the new content
		defResp.setJsonPayload(covidDefJson);

		// send the response to the caller and log errors
		var respResult = caller->respond(defResp);
		if (respResult is error) {
			log:printError(respResult.reason(), respResult);
		}
	}

	@http: ResourceConfig {
		methods: ["GET"],
		path: "/transmission"
	}
	resource function getTransmissionDetails(http:Caller caller, http:Request trReq) {
		http:Response transResp = new;

		// the actual content will come from the DB
		json covidTransJson = {};

		// fill the response payload with the new content
		transResp.setJsonPayload(covidTransJson);

		// send the response to the caller
		var respResult = caller->respond(transResp);
		if (respResult is error) {
			log:printError(respResult.reason(), respResult);
		}
	}

	@http: ResourceConfig {
		methods: ["GET"],
		path: "/treatment"
	}
	resource function getTreatmentInfo(http:Caller caller, http:Request tr1Req) {
		http:Response treatResp = new;

		// the actual content will come from the MongoDB client
		json convidTreatJson = {};

		// fill the response payload with the new content
		treatResp.setJsonPayload(convidTreatJson);

		// send the response to the caller and log errors
		var respResult = caller->respond(treatResp);
		if (respResult is error) {
			log:printError(respResult.reason(), respResult);
		}
	}

	@http: ResourceConfig {
		methods: ["GET"],
		path: "/tips"
	}
	resource function getSafetyTips(http:Caller caller, http:Request safReq) {
		http:Response tipResp = new;

		// load the safety tips from DB client
		json covidSafetyTipsJson = {};

		// fill the response payload with the new content
		tipResp.setJsonPayload(covidSafetyTipsJson);

		// send response to caller and log errors
		var respResult = caller->respond(tipResp);
		if (respResult is error) {
			log:printError(respResult.reason(), respResult);
		}
	}
}
