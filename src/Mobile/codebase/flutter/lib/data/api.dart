import 'dart:convert';

import 'package:covid_19_app/data/constants.dart';
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
        var id = REGION_IDS[reg.name];
        if (id != 'all') {
          debugPrint(reg.name + "=>" + jsonAll['regions'][id].toString());
          reg.statistics = Statistic.map(jsonAll['regions'][id]);
          reg.statistics.region = id;
        } else {
          debugPrint(
              reg.name + "=>" + Statistic.map(jsonAll['national']).toString());
          reg.statistics = Statistic.map(jsonAll['national']);
          reg.statistics.region = id;
        }
      }
      //final list = data.map((json) => Statistic.map(json)).toList();

      //debugPrint("ALL=>"+statList[1].suspected.toString());
      //final _stat = json.decode(res.body);

      //stat = Statistic.map(_stat.regions);

      // } else {
      //   print("Failed http call.");
      // }
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
        name: 'All of Namibia',
        //statistics:await getRegionalStatistics('All of Namibia')
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
        name: 'Oshikoto Region',
      ),
      Region(
        name: 'Kavango East Region',
      ),
      Region(
        name: 'Zambezi Region',
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
      ),
      Region(
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
        timestamp: DateTime.now(),
        confirmed: 0,
        dead: 0,
        suspected: 0,
        recovered: 0));

    return regions;
  }
}
