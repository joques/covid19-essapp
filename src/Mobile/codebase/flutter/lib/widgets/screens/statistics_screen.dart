import 'package:charts_flutter/flutter.dart' as Charts;
import 'package:covid_19_app/data/api.dart';
import 'package:covid_19_app/data/packages.dart';
import 'package:covid_19_app/data/store/Store.dart';
import 'package:covid_19_app/models/region.dart';
import 'package:covid_19_app/styles/colors.dart';
import 'package:covid_19_app/widgets/common/loading_stats.dart';
import 'package:covid_19_app/widgets/common/map_of_namibia.dart';
import 'package:covid_19_app/widgets/common/statistic_counter.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:timeago/timeago.dart' as timeago;

class StatisticsScreen extends StatefulWidget {
  final String title;

  StatisticsScreen({Key key, this.title}) : super(key: key);

  @override
  _StatisticsScreenState createState() => _StatisticsScreenState();
}

class _StatisticsScreenState extends State<StatisticsScreen> {
  //View By Area Drop Down Value
  var _value = '0';
  Store store = Store.instance;
  List<Region> _regions;
  Region selectedRegion;
  bool firstLoad = true;
  @override
  void initState() {
    super.initState();
    _regions = API().getRegionalData();
    selectedRegion = _regions[0];
    firstLoad = true;
  }

  //Drop Picker List items
  /* CupertinoPicker _regionsList() => CupertinoPicker(
        itemExtent: 28,
        backgroundColor: AppColors.accentElement,
        diameterRatio: 2,
        onSelectedItemChanged: (value) {
          setState(() {
            _value = value.toString();
            print(_value);
          });
        },
        children: Region.items,
        looping: true,
      );*/

  @override
  Widget build(BuildContext context) {
    double _wd = (MediaQuery.of(context).size.width / 2) - (16 + 8);
    return Scaffold(
        appBar: AppBar(
          title: Text(
            widget.title,
          ),
          centerTitle: true,
        ),
//        drawer: NavDrawer(),
        body: FutureBuilder<List<Region>>(
            future: store.getStats(),
            builder: (context, snapshot) {
              if (snapshot.hasData) {
                debugPrint("Got stats");
                _regions = snapshot.data;
                if (firstLoad) {
                  selectedRegion = _regions[0];
                  firstLoad = false;
                }
                return SingleChildScrollView(
                    child: Padding(
                  padding: const EdgeInsets.all(16),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: <Widget>[
                      Row(
                        crossAxisAlignment: CrossAxisAlignment.center,
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Wrap(
                            direction: Axis.horizontal,
                            alignment: WrapAlignment.spaceAround,
                            spacing: 16,
                            runSpacing: 16,
                            crossAxisAlignment: WrapCrossAlignment.start,
                            children: <Widget>[
                              Text(
                                'Select a Region',
                                style: Theme.of(context)
                                    .textTheme
                                    .headline
                                    .copyWith(
                                        color: AppColors.primaryElement,
                                        fontWeight: FontWeight.w700,
                                        fontSize: 16),
                              ),
                            ],
                          ),
                        ],
                      ), // Region Heading

                      ActionChip(
                        onPressed: () => showDialog(
                            context: context,
                            builder: (
                              BuildContext context,
                            ) {
                              return SimpleDialog(
                                  // contentPadding: EdgeInsets.all(10),
                                  title: const Text('Select a region'),
                                  children:
                                      List.generate(_regions.length, (index) {
                                    Region region = _regions[index];
                                    return SimpleDialogOption(
                                      onPressed: () {
                                        setState(() {
                                          selectedRegion = region;
                                          _value = index.toString();
                                          Navigator.pop(context);
                                        });
                                      },
                                      child: Padding(
                                        padding: const EdgeInsets.only(
                                            top: 8, bottom: 8),
                                        child: Text(
                                          region.name,
                                          style: TextStyle(
                                              fontWeight: FontWeight.w900),
                                        ),
                                      ),
                                    );
                                  }));
                            }),
                        avatar: Icon(Icons.arrow_drop_down),
                        label: Text('${selectedRegion.name}'),
                      ),
                      NamibianMap(
                        value: _value.toString(),
                        selectedColor: AppColors.primaryText,
                        baseColor: AppColors.secondaryBackground,
//                zambeziColor: , optional customisation
                      ), // Map
                      Divider(),
                      SizedBox(
                        height: 8,
                      ),
                      Wrap(
                        direction: Axis.horizontal,
                        alignment: WrapAlignment.spaceBetween,
                        spacing: 100,
                        runSpacing: 10,
                        crossAxisAlignment: WrapCrossAlignment.center,
                        children: <Widget>[
                          Text(
                            'Statistics',
                            style: Theme.of(context)
                                .textTheme
                                .headline
                                .copyWith(
                                    color: AppColors.primaryElement,
                                    fontWeight: FontWeight.w700,
                                    fontSize: 16),
                          ),
                          Wrap(
                            crossAxisAlignment: WrapCrossAlignment.center,
                            children: <Widget>[
                              Icon(LineIcons.clock_o),
                              Text(
                                'Updated: ' +
                                    timeago.format(DateTime.parse(
                                        _regions[0].statistics.timestamp)),
                                style: Theme.of(context)
                                    .textTheme
                                    .overline
                                    .copyWith(
                                        color: AppColors.secondaryText,
                                        fontWeight: FontWeight.w400,
                                        fontSize: 12),
                              )
                            ],
                          )
                        ],
                      ),
                      Container(
                        child: Column(
                          children: <Widget>[
                            SizedBox(
                              height: 16,
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: <Widget>[
                                StatisticCounter(
                                  width: _wd,
                                  count: selectedRegion.statistics.confirmed,
                                  borderColor: Colors.blue.shade800.value,
                                  title: 'Confirmed cases',
                                ),
                                StatisticCounter(
                                  width: _wd,
                                  count: selectedRegion.statistics.dead,
                                  borderColor: Colors.red.shade900.value,
                                  title: 'Confirmed deaths',
                                ),
                              ],
                            ),
                            SizedBox(
                              height: 16,
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: <Widget>[
                                StatisticCounter(
                                  width: _wd,
                                  count: selectedRegion.statistics.recovered,
                                  borderColor: Colors.green.shade900.value,
                                  title: 'Recovered patients',
                                ),
                                StatisticCounter(
                                  width: _wd,
                                  count: selectedRegion.statistics.suspected,
                                  borderColor: Colors.orange.shade900.value,
                                  title: 'Suspected cases',
                                ),
                              ],
                            ),
                          ],
                        ),
                      ),
                      SizedBox(
                        height: 18,
                      ),
                      Divider(),
                      SizedBox(
                        height: 16,
                      ),
                      Container(
                        decoration: ShapeDecoration(
                            color: Theme.of(context).accentColor,
                            shape: BeveledRectangleBorder(
                                borderRadius: BorderRadius.only(
                                    bottomRight: Radius.circular(16)),
                                side: BorderSide(
                                    color: Theme.of(context).primaryColor,
                                    width: 2))),
                        height: 400,
                        child: Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Charts.BarChart(
                            _chartData(),
                            barGroupingType: Charts.BarGroupingType.grouped,
                            vertical: false,
                            behaviors: [
                              Charts.SeriesLegend(
                                position: Charts.BehaviorPosition.top,
                                horizontalFirst: false,
                                cellPadding:
                                    EdgeInsets.only(right: 4.0, bottom: 4.0),
                                showMeasures: true,

                                /*measureFormatter: (num value) {
                                  return value == null ? '-' : '${value}k';
                                },*/
                              ),
                            ],
                          ),
                        ),
                      ),
                      SizedBox(
                        height: 16,
                      ),
                      Container(
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: <Widget>[
                            Text(
                              "Data is provided by:",
                              textAlign: TextAlign.center,
                              style: TextStyle(
                                color: AppColors.secondaryText,
                                fontFamily: "Roboto",
                                fontWeight: FontWeight.w600,
                                fontSize: 12,
                              ),
                            ),
                            SizedBox(
                              width: 5,
                            ),
                            Image.asset(
                              'assets/images/sponsors/liberity.png',
                              height: 50,
                            ),
//                      SvgPicture.asset(
//                        'assets/images/sponsors/NamibiaEmblem-01.svg',
//                        color: AppColors.secondaryText,
//                        height: 70,
//                      ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ));
              } else if (snapshot.hasError) {
                return LoadingStats();
//                Center(
//                child: Text('Error getting data!'),
//              );
              }
              return LoadingStats();
            }));
    //ADD CLOSINGS
  }

  List<Charts.Series<Cases, String>> _chartData() {
    final confirmedCasesData = <Cases>[];
    final suspectedCasesData = <Cases>[];
    final recoveredCasesData = <Cases>[];
    final deadCasesData = <Cases>[];

    _regions.forEach((region) {
      int total = region.statistics.suspected +
          region.statistics.confirmed +
          region.statistics.recovered +
          region.statistics.dead;
      if (region.id != 'all') {
        confirmedCasesData.add(Cases(
            region: region.name.replaceAll('Region', ''),
            count: region.statistics.confirmed));
        suspectedCasesData.add(Cases(
            region: region.name.replaceAll('Region', ''),
            count: region.statistics.suspected));
        recoveredCasesData.add(Cases(
            region: region.name.replaceAll('Region', ''),
            count: region.statistics.recovered));
        deadCasesData.add(Cases(
            region: region.name.replaceAll('Region', ''),
            count: region.statistics.dead));
      }
    });
    return [
      Charts.Series<Cases, String>(
        id: 'Confirmed',
        domainFn: (Cases cases, _) => cases.region,
        measureFn: (Cases cases, _) => cases.count,
        data: confirmedCasesData,
        seriesColor: Charts.Color(
            r: Colors.red.red,
            g: Colors.red.green,
            a: Colors.red.alpha,
            b: Colors.red.blue),
      ),
      new Charts.Series<Cases, String>(
        id: 'Suspected',
        domainFn: (Cases cases, _) => cases.region,
        measureFn: (Cases cases, _) => cases.count,
        data: suspectedCasesData,
        seriesColor: Charts.Color(
            r: Colors.blue.red,
            g: Colors.blue.green,
            a: Colors.blue.alpha,
            b: Colors.blue.blue),
      ),
      Charts.Series<Cases, String>(
        id: 'Recovered',
        domainFn: (Cases cases, _) => cases.region,
        measureFn: (Cases cases, _) => cases.count,
        data: recoveredCasesData,
        seriesColor: Charts.Color(
            r: Colors.green.red,
            g: Colors.green.green,
            a: Colors.green.alpha,
            b: Colors.green.blue),
      ),
      new Charts.Series<Cases, String>(
        id: 'Dead',
        domainFn: (Cases cases, _) => cases.region,
        measureFn: (Cases cases, _) => cases.count,
        data: deadCasesData,
        seriesColor: Charts.Color(
            r: Colors.black.red,
            g: Colors.black.green,
            a: Colors.black.alpha,
            b: Colors.black.blue),
      ),
    ];
  }
}

class Cases {
  final String region;
  final int count;

  Cases({this.region, this.count});
}
