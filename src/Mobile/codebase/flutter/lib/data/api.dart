import 'dart:convert';
import 'dart:math';

import 'package:covid_19_app/data/constants.dart';
import 'package:covid_19_app/models/centre.dart';
import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;

/// The API provider
/// client
class API {
  final _baseUrl = API_BASE_URL.replaceAll('{port}',
      API_PORTS[Random().nextInt(API_PORTS.length)]); // choose a random port

  Future<List<Centre>> getCentres() async {
    List<Centre> list = List();
    try {
      final url = _baseUrl + API_CENTRES;
      final res = await http.get(url);

      print('getting centres from: ' + url);

      final data = json.decode(res.body) as List;
      list = data.map((json) => Centre.map(json)).toList();
    } catch (err) {
      debugPrint(err.toString());
    }

    return list;
  }
}
