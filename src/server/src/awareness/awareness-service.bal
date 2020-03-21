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
		// the content should come from dbConn
		json latestData = {};

		latestResp.setJsonPayload(latestData);
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
		http:Response resp = new;
		// will get this from dbConn later
		json covidDefJson = {};

		// might refine the following code depending on the content of json
		resp.setJsonPayload(covidDefJson);
		var respResult = caller->respond(resp);
		if (respResult is error) {
			log:printError(respResult.reason(), respResult);
		}
	}

	@http: ResourceConfig {
		methods: ["GET"],
		path: "/transmission"
	}
	resource function getTransmissionDetails(http:Caller caller, http:Request trReq) {
		// transmission info goes here
	}

	@http: ResourceConfig {
		methods: ["GET"],
		path: "/treatment"
	}
	resource function getTreatmentInfo(http:Caller caller, http:Request tr1Req) {
		// treatment information goes here
	}

	@http: ResourceConfig {
		methods: ["GET"],
		path: "/tips"
	}
	resource function getSafetyTips(http:Caller caller, http:Request safReq) {
		// safety tips go here
	}
}
