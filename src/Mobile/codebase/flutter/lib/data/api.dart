import 'dart:convert';

import 'package:covid_19_app/data/constants.dart';
import 'package:covid_19_app/data/store/Store.dart';
import 'package:covid_19_app/models/centre.dart';
import 'package:covid_19_app/models/faq.dart';
import 'package:covid_19_app/models/memos.dart';
import 'package:covid_19_app/models/region.dart';
import 'package:covid_19_app/models/statistic.dart';
import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
//import 'package:http/h'

/// The API provider
/// client
class API {
  final _baseUrl = API_BASE_URL; // choose a random port

  Store store = Store.instance;

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

  /// Get testing centres
  Future<List<Memo>> getMemos() async {
    List<Memo> list = List();
    try {
      final url = (_baseUrl + API_MEMOS)
          .replaceAll('{port}', API_PORTS['memos'].toString());

      final res = await http.get(url);

      print('getting memos from: ' + url);

      final data = json.decode(res.body) as List;
      list = data.map((json) => Memo.map(json)).toList();
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

      // save to local db
      list.forEach((faq) {
        store.saveFaq(faq);
      });
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
      // } else {
      //   print("Failed http call.");
      // }
    } catch (err) {
      debugPrint(err.toString());
    }

    return stat;
  }

  /// Get national and regional statistics - latest
  Future<List<Region>> getAggregateStatistics() async {
    List<Region> statList = new List();
    try {
      final url = (_baseUrl + API_STAT_AGG)
          .replaceAll('{port}', API_PORTS['stats'].toString());
      final res = await http.get(url);
      print('getting stats from: ' + url);

      final jsonAll = json.decode(res.body);
      statList = getRegionalData();
      for (var reg in statList) {
        var id = reg.id;

        if (id != 'all') {
          reg.statistics = Statistic.mapJson(jsonAll['regions'][id]);
          reg.statistics.region = id;
        } else {
          reg.statistics = Statistic.mapJson(jsonAll['national']);
          reg.statistics.region = 'all';
        }

        // save to local db
        store.saveStatistic(reg.statistics);
      }
    } catch (err) {
      debugPrint(err.toString());
    }

    return statList;
  }

  /// Get statistics per regional stats latest
  Future<Statistic> getRegionalStatistics(String region) async {
    Statistic stat;
    try {
      final url = (_baseUrl + API_STAT_REGION + REGION_IDS[region])
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
        id: 'all',
        name: 'All of Namibia',
      ),
      Region(
        id: 'kunene',
        name: 'Kunene Region',
      ),
      Region(
        id: 'omusati',
        name: 'Omusati Region',
      ),
      Region(
        id: 'oshana',
        name: 'Oshana Region',
      ),
      Region(
        id: 'ohangwena',
        name: 'Ohangwena Region',
      ),
      Region(
        id: 'oshikoto',
        name: 'Oshikoto Region',
      ),
      Region(
        id: 'kavango-east',
        name: 'Kavango East Region',
      ),
      Region(
        id: 'zambezi',
        name: 'Zambezi Region',
      ),
      Region(
        id: 'erongo',
        name: 'Erongo Region',
      ),
      Region(
        id: 'otjozondjupa',
        name: 'Otjozondjupa Region',
      ),
      Region(
        id: 'omaheke',
        name: 'Omaheke Region',
      ),
      Region(
        id: 'khomas',
        name: 'Khomas Region',
      ),
      Region(
        id: 'hardap',
        name: 'Hardap Region',
      ),
      Region(
        id: 'karas',
        name: 'ǁKaras Region',
      ),
      Region(
        id: 'kavamgo-west',
        name: 'Kavango West Region',
      ),
    ];

    // regions.forEach((reg) => {
    //       getRegionalStatistics(reg.name).then((value) => {
    //             //debugPrint(value.confirmed.toString()),
    //             reg.statistics = value,
    //           })
    //     });
    // getLatestStatistics().then((value) => {
    //       regions[0].statistics = value,
    //     });

    regions.forEach((reg) => reg.statistics = Statistic(
        timestamp: DateTime.now().toString(),
        confirmed: 0,
        dead: 0,
        suspected: 0,
        recovered: 0));

    return regions;
  }
}
