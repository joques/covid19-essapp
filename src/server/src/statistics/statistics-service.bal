import ballerina/http;
import ballerina/log;
import ballerina/io;

listener http:Listener apiListener2 = new (6549);

function loadAllStats(string statPath) returns @tainted json {
	var rbc = io:openReadableFile(statPath);

	if (rbc is error) {
		log:printError("An error occurred while creating a byte channel", err=rbc);
		return {};
	} else {
		io:ReadableCharacterChannel rch = new (rbc, "UTF8");
		var jsonData = rch.readJson();
		var closeRes = rch.close();
		if (closeRes is error) {
			log:printError("An error occurred while closing the character channel", err=closeRes);
			return {};
		} else {
			if (jsonData is error) {
				log:printError("An error occurred while reading the JSON data", err=jsonData);
			} else {
				return jsonData;
			}
		}
	}
}

// local store with all stats
json statStore = <@untainted> loadAllStats("../../resources/statistics.json");

@http: ServiceConfig {
	basePath: "/covid/v1/statistics"
}
service awareness on apiListener2 {}
