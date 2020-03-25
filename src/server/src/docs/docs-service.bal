import ballerina/http;
import ballerina/log;
import ballerina/io;
import ballerina/mongodb;


mongodb:ClientEndpointConfig  mongoConfig = {
        host: "localhost",
        dbName: "covid-nam",
        username: "",
        password: "",
        options: {sslEnabled: false, serverSelectionTimeout: 500}
};

mongodb:Client dbClient = check new (mongoConfig);

listener http:Listener apilistener4 = new (6552);


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
			io:println("there was an error sending the response");
		}
	}
	
}
