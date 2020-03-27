import 'package:google_maps_flutter/google_maps_flutter.dart';

/// name : "Lady Pohamba Private Hospital"
/// about : "Private hospital"
/// coordinates : {"lat":-22.6220078,"lng":17.0930451}

class Centre {
  String name;
  String about;
  LatLng coordinates;

  Centre(this.name, this.about, this.coordinates);

  Centre.map(dynamic obj) {
    Map<String, dynamic> latLng = obj["coordinates"];
    print(latLng);

    this.name = obj["name"];
    this.about = obj["about"];
    this.coordinates = LatLng(latLng['latitude'], latLng['longitude']);
    print(latLng);
  }

  Map<String, dynamic> toMap() {
    var map = new Map<String, dynamic>();
    map["name"] = name;
    map["about"] = about;
    map["coordinates"] = {
      'latitude': coordinates.latitude,
      'longitude': coordinates.longitude
    };
    return map;
  }
}
