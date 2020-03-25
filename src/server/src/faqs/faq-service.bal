import ballerina/mongodb;
import ballerina/http;
import ballerina/log;
import ballerina/io;

mongodb:ClientEndpointConfig  mongoConfig = {
	host: "localhost",
	dbName: "covid-nam",
	username: "",
	password: "",
	options: {sslEnabled: false, serverSelectionTimeout: 500}
};

mongodb:Client dbClient = check new (mongoConfig);

listener http:Listener apiListener3 = new (6551);

@http: ServiceConfig {
	basePath: "/covid/v1/faq"
}

service faq on apiListener3 {
	@http: ResourceConfig {
		methods: ["GET"],
		path: "/all"
	}
	resource function getAllFacts(http:Caller caller, http:Request ltReq) {
		http:Response faqResp = new;

		// pull the latest news data
		var faqData = dbClient->find("faqs", ());

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
