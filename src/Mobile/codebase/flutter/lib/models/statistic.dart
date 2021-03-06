class Statistic {
  int suspected, confirmed, dead, recovered,quarantined;
  String timestamp;
  String region;

  Statistic(
      {this.timestamp,
      this.confirmed,
      this.dead,
      this.suspected,
      this.recovered,
      this.quarantined,
      this.region});

  Statistic.mapJson(dynamic json) {
    print(json);
    timestamp = json['date'];
    suspected = json['suspected'];
    dead = json['dead'];
    confirmed = json['confirmed'];
    recovered = json['recovered'];
    region = json['region'];
    quarantined = json['total_quarantined'];
  }

  Statistic.map(dynamic row) {
    print(row);
    timestamp = row['timestamp'];
    suspected = row['suspected'];
    dead = row['dead'];
    confirmed = row['confirmed'];
    recovered = row['recovered'];
    region = row['region'];
    quarantined = row['quarantined'];
  }

  Map<String, dynamic> toMap() {
    var map = new Map<String, dynamic>();
    map["dead"] = dead;
    map["timestamp"] = timestamp;
    map["confirmed"] = confirmed;
    map["suspected"] = suspected;
    map["recovered"] = recovered;
    map["quarantined"] = quarantined;
    map["region"] = region;

    return map;
  }
}
