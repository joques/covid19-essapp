import 'package:covid_19_app/models/statistic.dart';

class Region {
  String name;
  Statistic statistics;

  Region({this.name, this.statistics});

  Region.map(dynamic map) {
    Statistic stat = map['statistics'];
    name = map['name'];
    statistics = Statistic.map(stat);
  }

  Map<String, dynamic> toMap() {
    Map<String, dynamic> map;
    map['name'] = name;
    map['statistic'] = statistics;
    return map;
  }
}
