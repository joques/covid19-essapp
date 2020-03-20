import ballerina:http;
import ballerina/log;

listener http:Listener apiListener1 new (6547, host: "196.216.167.150");

@http: ServiceConfig {
	basePath: "/covid/v1/awareness"
};

service awareness on apiListener1 {
	@http: ResourceConfig {
		methods: ["GET"],
		path: "/latest"
	}
	resource function getLatestAwareness(http:Caller caller, http:Request ltReq) {
		// will pull the latest awareness info and share it
	}

	@http: ResourceConfig {
		methods: ["GET"],
		path: "/whatis"
	}
	resource function getCovidDefinition(http:Caller caller, http:Request defReq) {
		// will extract the response and send it back
		http:Response resp = new;
		// will have to finalise how this json is generated
		json covidDefJson = {};

		// might refine the following code depending on the content of json
		resp.setJsonPayload(covidDefJson);
		var result = caller->respond(resp);
		if (result is error) {
			log:printError(result.reason(), result);
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
