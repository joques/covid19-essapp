import ballerina/http;
import ballerina/log;
import ballerina/io;
import ballerina/mongodb;
import ballerina/docker;

mongodb:ClientEndpointConfig  mongoConfig = {
		host: "172.17.0.1:27017",
        dbName: "covid-nam",
        username: "",
        password: "",
        options: {sslEnabled: false, serverSelectionTimeout: 500}
};

mongodb:Client dbClient = check new (mongoConfig);

@docker:Expose {}
listener http:Listener apilistener4 = new (6552);

@docker:Config {
	name: "docs",
	tag: "v1.0"
}

@http: ServiceConfig {
	basePath: "/covid/v1/docs"
}

service documents on apilistener4 {
	@http: ResourceConfig {
		methods: ["GET"],
		path: "/description"
	}
	resource function getAllMetadata(http:Caller caller, http:Request docReq){
		http:Response allMetaResp = new;
		
		//pull the official document metadata from the data store
		var docuMetaData = dbClient -> find("ofdocus", ());

		if (docuMetaData is error) {
			log:printError("An error occurred while pulling document metadata from the data store", err=docuMetaData);
		} else {
			allMetaResp.setJsonPayload(docuMetaData);
			var sendRes = caller->respond(allMetaResp);

			io:println("sending the metadata out...");
		
			if (sendRes is error) {
				log:printError(sendRes.reason(), sendRes);
			}
		}	
	}

	@http: ResourceConfig {
		methods: ["GET"],
		path: "/doc/{docid}"
	}
	resource function getCircularFile(http:Caller caller, http:Request docReq, string docid){
		http:Response docResp = new;
	
		string docuContentType = "application/pdf";
		string filePath = "../../official-docs/" + docid + ".pdf";
		
		io:println("will send file ", filePath);

		docResp.setFileAsPayload(<@untainte> filePath, docuContentType);
		var sendRes1 = caller -> respond(docResp);
		if (sendRes1 is error) {
			io:println("there was an error sending the response ", sendRes1.reason());
		}
	}
	
}
