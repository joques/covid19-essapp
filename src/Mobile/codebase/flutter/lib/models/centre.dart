/// name : "Lady Pohamba Private Hospital"
/// about : "Private hospital"
/// coordinates : {"lat":-22.6220078,"lng":17.0930451}

class Centre {
  String _name;
  String _about;
  CoordinatesBean _coordinates;

  String get name => _name;
  String get about => _about;
  CoordinatesBean get coordinates => _coordinates;

  Centre(this._name, this._about, this._coordinates);

  Centre.map(dynamic obj) {
    this._name = obj["name"];
    this._about = obj["about"];
    this._coordinates = CoordinatesBean.map(obj["coordinates"]);
  }

  Map<String, dynamic> toMap() {
    var map = new Map<String, dynamic>();
    map["name"] = _name;
    map["about"] = _about;
    map["coordinates"] = _coordinates;
    return map;
  }
}

/// lat : -22.6220078
/// lng : 17.0930451

class CoordinatesBean {
  double _lat;
  double _lng;

  double get lat => _lat;
  double get lng => _lng;

  CoordinatesBean(this._lat, this._lng);

  CoordinatesBean.map(dynamic obj) {
    this._lat = obj["lat"];
    this._lng = obj["lng"];
  }

  Map<String, dynamic> toMap() {
    var map = new Map<String, dynamic>();
    map["lat"] = _lat;
    map["lng"] = _lng;
    return map;
  }
}
