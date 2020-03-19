import ballerina/http;

listener http:Listener NamCovidEP = new (3691,
host = "196.216.167.190"
);

@http: ServiceConfig {
    basePath = "/covid/v1"
}

service awareness on NamCovidEP {
    @http: ResourceConfig {
        methods: ["GET"],
        path: "/awareness"
    }

    resource function getAwarenessDetails(http:Caller caller, http:Request req) {
        // will handle awareness here
    }
}

service tips on NamCovidEP {
    @http: ResourceConfig {
        methods: ["GET"],
        path: "/tips"
    }

    resource function getSafetyTips(http:Caller caller, http:Request req) {
        // will provide safety tips here
    }
}

service memos on NamCovidEP {
    @http: ResourceConfig {
        methods: ["GET"],
        path: "/circulars"
    }

    resource function getCirculars(http:Caller caller, http:Request req) {
        //will handle docs here
    }
}
