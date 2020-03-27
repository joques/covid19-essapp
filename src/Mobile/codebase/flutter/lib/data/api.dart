import 'dart:convert';

import 'package:covid_19_app/data/constants.dart';
import 'package:covid_19_app/models/centre.dart';
import 'package:covid_19_app/models/faq.dart';
import 'package:covid_19_app/models/region.dart';
import 'package:covid_19_app/models/statistic.dart';
import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;

/// The API provider
/// client
class API {
  final _baseUrl = API_BASE_URL; // choose a random port

  /// Get testing centres
  Future<List<Centre>> getCentres() async {
    List<Centre> list = List();
    try {
      final url = (_baseUrl + API_CENTRES)
          .replaceAll('{port}', API_PORTS['centres'].toString());

      final res = await http.get(url);

      print('getting centres from: ' + url);

      final data = json.decode(res.body) as List;
      list = data.map((json) => Centre.map(json)).toList();
    } catch (err) {
      debugPrint(err.toString());
    }

    return list;
  }

  /// Get testing faqs
  Future<List<FAQ>> getFaqs() async {
    List<FAQ> list = List();
    try {
      final url = (_baseUrl + API_FAQ)
          .replaceAll('{port}', API_PORTS['faq'].toString());

      final res = await http.get(url);

      print('getting faqs from: ' + url);

      final data = json.decode(res.body) as List;
      list = data.map((json) => FAQ.map(json)).toList();
    } catch (err) {
      debugPrint(err.toString());
    }

    return list;
  }

  /// Get testing statistics - latest
  Future<Statistic> getLatestStatistics() async {
    Statistic stat;
    try {
      final url = (_baseUrl + API_STAT_LATEST)
          .replaceAll('{port}', API_PORTS['stats'].toString());
      final res = await http.get(url);

      print('getting stats from: ' + url);

      final _stat = json.decode(res.body);
      stat = Statistic.map(_stat);
    } catch (err) {
      debugPrint(err.toString());
    }

    return stat;
  }

  List<Region> getRegionalData() {
    List<Region> regions = [
      Region(
        name: 'All of Namibia',
      ),
      Region(
        name: 'Kunene Region',
      ),
      Region(
        name: 'Omusati Region',
      ),
      Region(
        name: 'Oshana Region',
      ),
      Region(
        name: 'Ohangwena Region',
      ),
      Region(
        name: 'Kavango Region',
      ),
      Region(
        name: 'Zambezi Region',
      ),
      Region(
        name: 'Oshikoto Region',
      ),
      Region(
        name: 'Erongo Region',
      ),
      Region(
        name: 'Otjozondjupa Region',
      ),
      Region(
        name: 'Omaheke Region',
      ),
      Region(
        name: 'Khomas Region',
      ),
      Region(
        name: 'Hardap Region',
      ),
      Region(
        name: 'ǁKaras Region',
      )
    ];

    regions.forEach((reg) => reg.statistics = Statistic(
        timestamp: DateTime.now(),
        confirmed: 0,
        dead: 0,
        suspected: 0,
        recovered: 0));

    return regions;
  }
}
