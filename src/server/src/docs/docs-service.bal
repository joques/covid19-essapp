import ballerina/http;
import ballerina/log;
import ballerina/io;
import ballerina/mongodb;
import ballerina/docker;
import ballerina/file;

final json docURLs = {"offdoc001": "https://bit.ly/2WTtLry", "offdoc002": "https://bit.ly/2UsxNFr", "offdoc003": "shortURL.at/emFOP", "offdoc004": "https://bit.ly/3bBkHf0", "offdoc005": "https://bit.ly/2UFK08M", "offdoc006": "https://bit.ly/2Jl4LkX", "offdoc007": "https://bit.ly/3at2bFr", "offdoc008": "https://bit.ly/2UqmjSQ", "offdoc009": "https://bit.ly/3aw8VT4", "offdoc010": "https://bit.ly/3aw8VT4", "offdoc011": "https://bit.ly/3aw8VT4", "offdoc012": "https://bit.ly/3aw8VT4", "offdoc013": "https://bit.ly/3aw8VT4", "offdoc014": "https://bit.ly/3aw8VT4", "offdoc015": "https://bit.ly/3dApPSt", "offdoc016": "https://bit.ly/3bC0Oo4", "offdoc017": "https://bit.ly/3dDOBB3", "offdoc018": "https://bit.ly/3bDOX98", "offdoc019": "https://bit.ly/2URpQJc", "offdoc020": "https://bit.ly/3aoM1wG", "offdoc021": "https://bit.ly/39r5T0T"};

mongodb:ClientEndpointConfig  mongoConfig = {
		host: "172.17.0.1:27017",
        dbName: "covid-nam",
        username: "",
        password: "",
        options: {sslEnabled: false, serverSelectionTimeout: 500}
};

mongodb:Client dbClient = check new (mongoConfig);

@docker:Expose {}
listener http:Listener apilistener4 = new (6552, config = {
	secureSocket: {
        keyStore: {
            path: "../../resources/cov19cert.p12",
            password: "covpass91"
        }
    }
});

@docker:Config {
	name: "docs",
	tag: "v1.0"
}

@docker:CopyFiles {
	files: [
		{sourceFile: "../../official-docs/offdoc001.pdf", target: "/home/ballerina/data/official-docs/offdoc001.pdf"},
		{sourceFile: "../../official-docs/offdoc002.pdf", target: "/home/ballerina/data/official-docs/offdoc002.pdf"},
		{sourceFile: "../../official-docs/offdoc003.pdf", target: "/home/ballerina/data/official-docs/offdoc003.pdf"},
		{sourceFile: "../../official-docs/offdoc004.pdf", target: "/home/ballerina/data/official-docs/offdoc004.pdf"},
		{sourceFile: "../../official-docs/offdoc005.pdf", target: "/home/ballerina/data/official-docs/offdoc005.pdf"},
		{sourceFile: "../../official-docs/offdoc006.pdf", target: "/home/ballerina/data/official-docs/offdoc006.pdf"},
		{sourceFile: "../../official-docs/offdoc007.pdf", target: "/home/ballerina/data/official-docs/offdoc007.pdf"},
		{sourceFile: "../../official-docs/offdoc008.pdf", target: "/home/ballerina/data/official-docs/offdoc008.pdf"},
		{sourceFile: "../../official-docs/offdoc009.pdf", target: "/home/ballerina/data/official-docs/offdoc009.pdf"},
        {sourceFile: "../../official-docs/offdoc010.pdf", target: "/home/ballerina/data/official-docs/offdoc010.pdf"},
        {sourceFile: "../../official-docs/offdoc011.pdf", target: "/home/ballerina/data/official-docs/offdoc011.pdf"},
		{sourceFile: "../../official-docs/offdoc012.pdf", target: "/home/ballerina/data/official-docs/offdoc012.pdf"},
		{sourceFile: "../../official-docs/offdoc013.pdf", target: "/home/ballerina/data/official-docs/offdoc013.pdf"},
		{sourceFile: "../../official-docs/offdoc014.pdf", target: "/home/ballerina/data/official-docs/offdoc014.pdf"},
		{sourceFile: "../../official-docs/offdoc015.jpeg", target: "/home/ballerina/data/official-docs/offdoc015.jpeg"},
		{sourceFile: "../../official-docs/offdoc016.jpeg", target: "/home/ballerina/data/official-docs/offdoc016.jpeg"},
		{sourceFile: "../../official-docs/offdoc017.jpeg", target: "/home/ballerina/data/official-docs/offdoc017.jpeg"},
		{sourceFile: "../../official-docs/offdoc018.jpeg", target: "/home/ballerina/data/official-docs/offdoc018.jpeg"},
		{sourceFile: "../../official-docs/offdoc019.jpeg", target: "/home/ballerina/data/official-docs/offdoc019.jpeg"},
		{sourceFile: "../../official-docs/offdoc020.jpeg", target: "/home/ballerina/data/official-docs/offdoc020.jpeg"},
		{sourceFile: "../../official-docs/offdoc021.jpeg", target: "/home/ballerina/data/official-docs/offdoc021.jpeg"}
	]
}

@http: ServiceConfig {
	basePath: "/covid/v1/docs",
	cors: {
        allowOrigins: ["*"],
        allowHeaders: ["*"],
        maxAge: 84900
    }
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
		path: "/mobile/description"
	}
	resource function getAllMetadataForMobile(http:Caller caller, http:Request docReq){
		// local mapping between document id and external url
        
		http:Response allMetaResp = new;
		
		//pull the official document metadata from the data store
		var docuMetaData = dbClient -> find("ofdocus", ());

		if (docuMetaData is error) {
			log:printError("An error occurred while pulling document metadata from the data store", err=docuMetaData);
		} else {
			json[] finalDocuData = [];
			
			foreach var singleDocuItem in docuMetaData {
				string finalDocId = "";
				string finalTitle = "";
				string finalPubDate = "";
				string finalAuthor = "";
				string finalSource  = "";
				string finalUrl = "";
				
				var exDocID = singleDocuItem.docid;
				if (exDocID is string) {
					finalDocId = exDocID;
					var docUrl = docURLs.exDocID;
					if (docUrl is string) {
						finalUrl = docUrl;
					}
				}
				
				var exDocTitle = singleDocuItem.title;
				if (exDocTitle is string) {
					finalTitle = exDocTitle;
				}
				
				var exDocPubDate = singleDocuItem.pubdate;
				if (exDocPubDate is string) {
					finalPubDate = exDocPubDate;
				}
				
				var exDocAuthor = singleDocuItem.author;
				if (exDocAuthor is string) {
					finalAuthor = exDocAuthor;
				}
				
				var exDocSource = singleDocuItem.docsource;
				if (exDocSource is string) {
					finalSource = exDocSource;
				}
				
				json docuSample = {"docid": finalDocId, "title": finalTitle, "pubdate": finalPubDate, "author": finalAuthor, "source": finalSource, "docurl": finalUrl};
				
				finalDocuData.push(docuSample);
			}
			
			allMetaResp.setJsonPayload(finalDocuData);			
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
		string pdfDocuContentType = "application/pdf";
		string jpegDocuContentType = "application/jpeg";
		
		string pdfFilePath = "./data/official-docs/" + docid + ".pdf";
		
		if (file:exists(<@untainted> pdfFilePath)) {
			docResp.setFileAsPayload(<@untainted> pdfFilePath, pdfDocuContentType);
		} else {
			string jpegFilePath = "./data/official-docs/" + docid + ".jpeg";
			if (file:exists(<@untainted> jpegFilePath)) {
				docResp.setFileAsPayload(<@untainted> jpegFilePath, jpegDocuContentType);
			} else {
				string noFileInfo = "No File with Document ID " + docid;
				docResp.setJsonPayload(<@untainted> noFileInfo);
			}
		}
		
		var sendRes1 = caller -> respond(docResp);
		if (sendRes1 is error) {
			io:println("there was an error sending the response ", sendRes1.reason());
		}
	}
}
