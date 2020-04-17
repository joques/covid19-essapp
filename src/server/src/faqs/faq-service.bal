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
mongodb:Collection faqCol = checkpanic dBase->getCollection("faqs");


@docker:Expose {}
listener http:Listener apiListener3 = new (6551, config = {
	secureSocket: {
        keyStore: {
            path: "../../resources/cov19cert.p12",
            password: "covpass91"
        }
    }
});

@docker:Config {
	name: "faq",
	tag: "v1.0"
}

@http: ServiceConfig {
	basePath: "/covid/v1/faq",
	cors: {
        allowOrigins: ["*"],
        allowHeaders: ["*"],
        maxAge: 84900
    }
}

service faq on apiListener3 {
	@http: ResourceConfig {
		methods: ["GET"],
		path: "/all"
	}
	resource function getAllFacts(http:Caller caller, http:Request ltReq) {
		http:Response faqResp = new;

		// pull the latest news data
		var faqData = faqCol->find();

		// fill the repsonse payload with the new content
		if (faqData is error) {
			log:printError("An error occurred while pulling frequently asked questions from the data store", err=faqData);
		} else {
			io:println(faqData);
			faqResp.setJsonPayload(faqData);

			// send the response to the caller and log errors
			var respResult = caller->respond(faqResp);
			if (respResult is error) {
				log:printError(respResult.reason(), respResult);
			}
		}
	}
}
