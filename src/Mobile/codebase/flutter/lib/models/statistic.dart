class Statistic {
  int suspected, confirmed, dead, recovered;
  DateTime timestamp;
  String region;

  Statistic(
      {this.timestamp,
      this.confirmed,
      this.dead,
      this.suspected,
      this.recovered,
      this.region});

  Statistic.map(dynamic json) {
    print(json);
    timestamp = DateTime.parse(json['date']);
    suspected = json['suspected'];
    dead = json['dead'];
    confirmed = json['confirmed'];
    recovered = json['recovered'];
    region = json['region'];
  }

  Map<String, dynamic> toMap() {
    var map = new Map<String, dynamic>();
    map["dead"] = dead;
    map["date"] = timestamp.toString();
    map["confirmed"] = confirmed;
    map["suspected"] = suspected;
    map["recovered"] = recovered;
    map["region"] = region;

    return map;
  }
}
