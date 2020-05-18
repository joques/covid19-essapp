import ballerina/mongodb;
import ballerina/http;
import ballerina/log;
import ballerina/io;
import ballerina/docker;

mongodb:ClientConfig  mongoConfig = {
	host: "172.17.0.1",
	port: 27017,
	username: "",
	password: "",
	options: {sslEnabled: false, serverSelectionTimeout: 500}
};

mongodb:Client dbClient = checkpanic new (mongoConfig);
mongodb:Database dBase = checkpanic dbClient->getDatabase("covid-nam");
mongodb:Collection centreCol = checkpanic dBase->getCollection("centres");


@docker:Expose {}
listener http:Listener apiListener3 = new (6550, config = {
	secureSocket: {
        keyStore: {
            path: "../../resources/cov19cert.p12",
            password: "covpass91"
        }
    }
});

@docker:Config {
	name: "centre",
	tag: "v1.0"
}

@http: ServiceConfig {
	basePath: "/covid/v1/centre",
	cors: {
        allowOrigins: ["https://namibiacovid19.gov.na"],
        allowHeaders: ["*"],
        maxAge: 84900
    }
}

service faq on apiListener3 {
	@http: ResourceConfig {
		methods: ["GET"],
		path: "/all"
	}
	resource function getAllCentres(http:Caller caller, http:Request ltReq) {
		http:Response ctResp = new;

		// pull the latest news data
		var ctData = centreCol->find();

		// fill the repsonse payload with the new content
		if (ctData is error) {
			log:printError("An error occurred while pulling testing centre data from the data store", err=ctData);
		} else {
			io:println(ctData);
			ctResp.setJsonPayload(ctData);

			// send the response to the caller and log errors
			var respResult = caller->respond(ctResp);
			if (respResult is error) {
				log:printError(respResult.reason(), respResult);
			}
		}
	}

}
