import ballerina/http;
import ballerina/log;
import ballerina/io;
import ballerina/mongodb;
import ballerina/docker;
import ballerina/file;

final map<string> docURLs = {
	offdoc001: "https://bit.ly/2WTtLry",
	offdoc002: "https://bit.ly/2UsxNFr",
	offdoc003: "shortURL.at/emFOP",
	offdoc004: "https://bit.ly/3bBkHf0",
	offdoc005: "https://bit.ly/2UFK08M",
	offdoc006: "https://bit.ly/2Jl4LkX",
	offdoc007: "https://bit.ly/3at2bFr",
	offdoc008: "https://bit.ly/2UqmjSQ",
	offdoc009: "https://bit.ly/3aw8VT4",
	offdoc010: "https://bit.ly/3aw8VT4",
	offdoc011: "https://bit.ly/3aw8VT4",
	offdoc012: "https://bit.ly/3aw8VT4",
	offdoc013: "https://bit.ly/3aw8VT4",
	offdoc014: "https://bit.ly/3aw8VT4",
	offdoc015: "https://bit.ly/3dApPSt",
	offdoc016: "https://bit.ly/3bC0Oo4",
	offdoc017: "https://bit.ly/3dDOBB3",
	offdoc018: "https://bit.ly/3bDOX98",
	offdoc019: "https://bit.ly/2URpQJc",
	offdoc020: "https://bit.ly/3aoM1wG",
	offdoc021: "https://bit.ly/39r5T0T",
	offdoc038: "shorturl.at/dgHPW",
	offdoc039: "shorturl.at/x2459",
	offdoc041: "shorturl.at/dksu0",
	offdoc042: "shorturl.at/kzCD5",
	offdoc043: "shorturl.at/jzBQ7",
	offdoc044: "shorturl.at/gmuF3",
	offdoc045: "shorturl.at/muxS5",
	offdoc046: "shorturl.at/mqIO0",
	offdoc047: "shorturl.at/aNSTW",
	offdoc048: "shorturl.at/CLXZ",
	offdoc049: "shorturl.at/gKMT4",
	offdoc050: "shorturl.at/ceFGV",
	offdoc051: "shorturl.at/vCE14",
	offdoc052: "shorturl.at/hFHIJ",
	offdoc053: "shorturl.at/hGPUY",
	offdoc054: "shorturl.at/xzCNO",
	offdoc055: "shorturl.at/uyIKN",
	offdoc056: "shorturl.at/cpqU7",
	offdoc057: "shorturl.at/qwKV4",
	offdoc058: "shorturl.at/epDP5",
	offdoc059: "shorturl.at/diloD"
};

mongodb:ClientConfig  mongoConfig = {
	host: "172.17.0.1",
	port: 27017,
	username: "",
	password: "",
	options: {sslEnabled: false, serverSelectionTimeout: 500}
};

mongodb:Client dbClient = checkpanic new (mongoConfig);
mongodb:Database dBase = checkpanic dbClient->getDatabase("covid-nam");
mongodb:Collection docCol = checkpanic dBase->getCollection("ofdocus");

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
		{sourceFile: "../../official-docs/offdoc021.jpeg", target: "/home/ballerina/data/official-docs/offdoc021.jpeg"},
		{sourceFile: "../../official-docs/offdoc038.pdf", target: "/home/ballerina/data/official-docs/offdoc038.pdf"},
		{sourceFile: "../../official-docs/offdoc039.pdf", target: "/home/ballerina/data/official-docs/offdoc039.pdf"},
		{sourceFile: "../../official-docs/offdoc041.pdf", target: "/home/ballerina/data/official-docs/offdoc041.pdf"},
		{sourceFile: "../../official-docs/offdoc042.pdf", target: "/home/ballerina/data/official-docs/offdoc042.pdf"},
		{sourceFile: "../../official-docs/offdoc043.pdf", target: "/home/ballerina/data/official-docs/offdoc043.pdf"},
		{sourceFile: "../../official-docs/offdoc044.pdf", target: "/home/ballerina/data/official-docs/offdoc044.pdf"},
		{sourceFile: "../../official-docs/offdoc045.pdf", target: "/home/ballerina/data/official-docs/offdoc045.pdf"},
		{sourceFile: "../../official-docs/offdoc046.pdf", target: "/home/ballerina/data/official-docs/offdoc046.pdf"},
		{sourceFile: "../../official-docs/offdoc047.pdf", target: "/home/ballerina/data/official-docs/offdoc047.pdf"},
		{sourceFile: "../../official-docs/offdoc048.pdf", target: "/home/ballerina/data/official-docs/offdoc048.pdf"},
		{sourceFile: "../../official-docs/offdoc049.pdf", target: "/home/ballerina/data/official-docs/offdoc049.pdf"},
		{sourceFile: "../../official-docs/offdoc050.pdf", target: "/home/ballerina/data/official-docs/offdoc050.pdf"},
		{sourceFile: "../../official-docs/offdoc051.pdf", target: "/home/ballerina/data/official-docs/offdoc051.pdf"},
		{sourceFile: "../../official-docs/offdoc052.pdf", target: "/home/ballerina/data/official-docs/offdoc052.pdf"},
		{sourceFile: "../../official-docs/offdoc053.pdf", target: "/home/ballerina/data/official-docs/offdoc053.pdf"},
		{sourceFile: "../../official-docs/offdoc054.pdf", target: "/home/ballerina/data/official-docs/offdoc054.pdf"},
		{sourceFile: "../../official-docs/offdoc055.pdf", target: "/home/ballerina/data/official-docs/offdoc055.pdf"},
		{sourceFile: "../../official-docs/offdoc056.pdf", target: "/home/ballerina/data/official-docs/offdoc056.pdf"},
		{sourceFile: "../../official-docs/offdoc057.pdf", target: "/home/ballerina/data/official-docs/offdoc057.pdf"},
		{sourceFile: "../../official-docs/offdoc058.pdf", target: "/home/ballerina/data/official-docs/offdoc058.pdf"},
		{sourceFile: "../../official-docs/offdoc059.pdf", target: "/home/ballerina/data/official-docs/offdoc059.pdf"}
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
		var docuMetaData = docCol -> find();

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
		http:Response allMetaResp = new;

		//pull the official document metadata from the data store
		var docuMetaData = docCol -> find();

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
					var docUrl = docURLs[exDocID];
					if (docUrl is string) {
						finalUrl = docUrl.toJsonString();
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
