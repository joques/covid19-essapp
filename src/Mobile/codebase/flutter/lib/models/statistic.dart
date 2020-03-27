class Statistic {
  int suspected, confirmed, dead, recovered;
  DateTime timestamp;

  Statistic(
      {this.timestamp,
      this.confirmed,
      this.dead,
      this.suspected,
      this.recovered});

  Statistic.map(dynamic json) {
    print(json);
    timestamp = DateTime.parse(json['date']);
    suspected = json['suspected'];
    dead = json['dead'];
    confirmed = json['confirmed'];
    recovered = json['recovered'];
  }

  Map<String, dynamic> toMap() {
    var map = new Map<String, dynamic>();
    map["dead"] = dead;
    map["date"] = timestamp.toString();
    map["confirmed"] = confirmed;
    map["suspected"] = suspected;
    map["recovered"] = recovered;

    return map;
  }
}
