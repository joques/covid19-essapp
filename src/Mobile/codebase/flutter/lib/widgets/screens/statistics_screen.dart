import 'package:covid_19_app/styles/colors.dart';
import 'package:covid_19_app/data/regions.dart';
import 'package:covid_19_app/widgets/common/map_of_namibia.dart';
import 'package:covid_19_app/widgets/common/statistic_counter.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class StatisticsScreen extends StatefulWidget {
  final String title;
  StatisticsScreen({Key key, this.title}) : super(key: key);

  @override
  _StatisticsScreenState createState() => _StatisticsScreenState();
}

class _StatisticsScreenState extends State<StatisticsScreen> {
  //Dummy Data
  String refreshDate = "Thur, 19 March 2020, 7:30 am";

  //Push Notification Consent
  bool consent = false;

  //View By Area Drop Down Value
  var _value;

  //Drop Picker List items
  CupertinoPicker _regionsList() => CupertinoPicker(
        itemExtent: 28,
        backgroundColor: AppColors.accentElement,
        diameterRatio: 19,
        onSelectedItemChanged: (value) {
          setState(() {
            _value = value;
            print(_value);
          });
        },
        children: Region.items,
        looping: true,
      );

  @override
  Widget build(BuildContext context) {
    double _wd = (MediaQuery.of(context).size.width / 2) - 50;
    return Scaffold(
        appBar: AppBar(
          title: Text(
            widget.title,
          ),
          centerTitle: true,
        ),
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
                        "As of $refreshDate",
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
              Container(
                  height: 50,
                  margin: EdgeInsets.only(
                    left: 20,
                    right: 20,
                    top: 15,
                    bottom: 15,
                  ),
                  decoration: BoxDecoration(
                    color: AppColors.accentElement,
                    borderRadius: BorderRadius.circular(9.0),
                  ),
                  child: Container(
                      margin: EdgeInsets.only(
                        left: 15,
                        right: 15,
                      ),
                      decoration: BoxDecoration(
                        color: AppColors.accentElement,
                      ),
                      child: _regionsList())), // Picker Menu
              NamibianMap(
                value: _value.toString(),
                selectedColor: AppColors.secondaryText,
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
                          count: 0,
                          borderColor: Colors.blue.shade900.value,
                          title: 'Confirmed Cases',
                        ),
                        StatisticCounter(
                          width: _wd,
                          count: 0,
                          borderColor: Colors.red.shade800.value,
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
                          count: 0,
                          borderColor: Colors.green.shade900.value,
                          title: 'Recoverd Patients',
                        ),
                        StatisticCounter(
                          width: _wd,
                          count: 19,
                          borderColor: Colors.orange.shade900.value,
                          title: 'Suspected Cases',
                        ),
                      ],
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
