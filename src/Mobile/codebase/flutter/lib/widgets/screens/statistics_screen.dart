import 'package:covid_19_app/data/api.dart';
import 'package:covid_19_app/models/region.dart';
import 'package:covid_19_app/styles/colors.dart';
import 'package:covid_19_app/widgets/common/map_of_namibia.dart';
import 'package:covid_19_app/widgets/common/nav_drawer.dart';
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
  //Dummy Date Now
  String refreshDate = DateTime.now().toUtc().toString();

  //Push Notification Consent
  bool consent = false;

  //View By Area Drop Down Value
  var _value = '0';

  List<Region> _regions;
  Region selectedRegion;

  @override
  void initState() {
    super.initState();
    _regions = API().getRegionalData();
    debugPrint("done");
    selectedRegion = _regions[0];
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
    double _wd = (MediaQuery.of(context).size.width / 2) - 45;
    return Scaffold(
        appBar: AppBar(
          title: Text(
            widget.title,
          ),
          centerTitle: true,
        ),
        drawer: NavDrawer(),
        body: SingleChildScrollView(
          child: Column(
            children: <Widget>[
              Container(
                height: 20,
                margin: EdgeInsets.only(
                  left: 20,
                  right: 20,
                  top: 15,
                  bottom: 15,
                ),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Container(
                      child: Text(
                        "View By Region",
                        textAlign: TextAlign.left,
                        style: TextStyle(
                          color: AppColors.primaryText,
                          fontFamily: "Roboto",
                          fontWeight: FontWeight.w700,
                          fontSize: 16,
                        ),
                      ),
                    ),
                    Spacer(),
                    Container(
                      margin: EdgeInsets.only(top: 3),
                      child: Text(
                        "As of ${timeago.format(_regions[0].statistics.timestamp)}",
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          color: AppColors.secondaryText,
                          fontWeight: FontWeight.w400,
                          fontSize: 13,
                        ),
                      ),
                    ),
                  ],
                ),
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
                          children: List.generate(_regions.length, (index) {
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
                                padding:
                                    const EdgeInsets.only(top: 8, bottom: 8),
                                child: Text(
                                  region.name,
                                  style: TextStyle(fontWeight: FontWeight.w900),
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
              Container(
                child: Column(
                  children: <Widget>[
                    SizedBox(
                      height: 16,
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: <Widget>[
                        StatisticCounter(
                          width: _wd,
                          count: selectedRegion.statistics.confirmed,
                          borderColor: Colors.blue.shade800.value,
                          title: 'Confirmed Cases',
                        ),
                        StatisticCounter(
                          width: _wd,
                          count: selectedRegion.statistics.dead,
                          borderColor: Colors.red.shade900.value,
                          title: 'Confirmed Deaths',
                        ),
                      ],
                    ),
                    SizedBox(
                      height: 16,
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: <Widget>[
                        StatisticCounter(
                          width: _wd,
                          count: selectedRegion.statistics.recovered,
                          borderColor: Colors.green.shade900.value,
                          title: 'Recoverd Patients',
                        ),
                        StatisticCounter(
                          width: _wd,
                          count: selectedRegion.statistics.suspected,
                          borderColor: Colors.orange.shade900.value,
                          title: 'Suspected Cases',
                        ),
                      ],
                    ),
                    SizedBox(
                      height: 16,
                    ),
                  ],
                ),
              ), // Statistics Data
              Divider(),
              Container(
                height: 75, //TODO: Fix Overflow
                margin: EdgeInsets.only(
                  left: 20,
                  right: 20,
                  top: 15,
                  bottom: 15,
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Container(
                      height: 40,
                      child: Row(
                        children: [
                          Text(
                            "Push Notifications",
                            textAlign: TextAlign.left,
                            style: TextStyle(
                              color: AppColors.primaryText,
                              fontWeight: FontWeight.w700,
                              fontSize: 16,
                            ),
                          ),
                          Spacer(),
                          Container(
                            width: 52,
                            height: 45,
                            child: Switch(
                              value: consent,
                              inactiveTrackColor: Color.fromARGB(60, 0, 0, 0),
                              onChanged: (value) {
                                setState(() {
                                  consent = value;
                                  print(consent);
                                });
                              },
                              activeColor: AppColors.primaryElement,
                              activeTrackColor: AppColors.primaryElement,
                            ),
                          ),
                        ],
                      ),
                    ),
                    Spacer(),
                    Container(
                      margin: EdgeInsets.only(right: 66),
                      child: Text(
                        "By Enabling this option you will receive the latest notifications as they happen.",
                        textAlign: TextAlign.left,
                        style: TextStyle(
                          color: AppColors.secondaryText,
                          fontSize: 13,
                        ),
                      ),
                    ),
                  ],
                ),
              ), // Push Notifications Consent
            ],
          ),
        ));
  }
}
