class Statistic {
  double suspected, confirmed, dead, recovered;

  Statistic({this.confirmed, this.dead, this.suspected, this.recovered});

  Statistic.map(dynamic json) {
    suspected = json['suspected'];
    dead = json['dead'];
    confirmed = json['confirmed'];
    recovered = json['recovered'];
  }

  Map<String, dynamic> toMap() {
    var map = new Map<String, dynamic>();
    map["dead"] = dead;
    map["confirmed"] = confirmed;
    map["suspected"] = suspected;
    map["recovered"] = recovered;

    return map;
  }
}
