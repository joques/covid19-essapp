import ballerina/http;
import ballerina/log;
import ballerina/io;


listener http:Listener apilistener4 = new (6552);

function loadDocMetadata(string metadataPath) returns @tainted json[] {
	var rCSVChannel = io:openReadableCsvFile(metadataPath);
	io:println("Start processing the CSV file from ", metadataPath);
	
	json[] loadResult = [];
	
	if (rCSVChannel is error) {
		io:println("An error occurred with openning the channel to read CSV data");
		return loadResult;
	} else {
		while (rCSVChannel.hasNext()) {
			var curRec = rCSVChannel.getNext();
		
			if (curRec is string[]) {
				io:println("printing current record");
				io:println(curRec);
			 } else {
				io:println(curRec);
			}
		}
	
		var opResult = rCSVChannel.close();
		if (opResult is error) {
			io:println("an error occurred while closing the cvs channel");
			return loadResult;
		} else {
			io:println("we are done loading the data...");
			return loadResult;
		}	
	}	
}

json[] fileMetaData = <@untainted> loadDocMetadata("../../official-docs/doc-metadata.csv");


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
		
		allMetaResp.setJsonPayload(fileMetaData);
		var sendRes = caller->respond(allMetaResp);
		
		if (sendRes is error) {
			log:printError(sendRes.reason(), sendRes);
		}
	}
}
