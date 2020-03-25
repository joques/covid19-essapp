import 'dart:convert';

import 'package:covid_19_app/data/constants.dart';
import 'package:covid_19_app/models/centre.dart';
import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;

/// The API provider
/// client
class API {
  final _baseUrl = API_BASE_URL;

  Future<List<Centre>> getCentres() async {
    try {
      final url = _baseUrl + API_CENTRES;
      final res = await http.get(url);
      List<Centre> list;
      print('getting centres: ' + url);

      final data = json.decode(res.body) as List;
      return data.map((json) => Centre.map(json)).toList();
    } catch (err) {
      debugPrint(err.toString());
    }
  }
}
