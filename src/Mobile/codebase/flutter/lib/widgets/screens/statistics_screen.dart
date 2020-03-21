import 'package:covid_19_app/styles/colors.dart';
import 'package:covid_19_app/widgets/common/statistic_counter.dart';
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

  DropdownButton _itemDown() => DropdownButton<String>(
        items: [
          DropdownMenuItem(
            value: "All Namibia",
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Text(
                  "All Namibia",
                  style: TextStyle(
                    color: AppColors.primaryText,
                    fontFamily: "Roboto",
                    fontWeight: FontWeight.w600,
                    fontSize: 16,
                  ),
                ),
              ],
            ),
          ),
          DropdownMenuItem(
            value: "Kunene",
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Text(
                  "Kunene",
                  style: TextStyle(
                    color: AppColors.primaryText,
                    fontFamily: "Roboto",
                    fontWeight: FontWeight.w600,
                    fontSize: 16,
                  ),
                ),
              ],
            ),
          ),
          DropdownMenuItem(
            value: "Kavango Region",
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Text(
                  "Kavango Region",
                  style: TextStyle(
                    color: AppColors.primaryText,
                    fontFamily: "Roboto",
                    fontWeight: FontWeight.w600,
                    fontSize: 16,
                  ),
                ),
              ],
            ),
          ),
          DropdownMenuItem(
            value: "Khomas",
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Text(
                  "Khomas",
                  style: TextStyle(
                    color: AppColors.primaryText,
                    fontFamily: "Roboto",
                    fontWeight: FontWeight.w600,
                    fontSize: 16,
                  ),
                ),
              ],
            ),
          ),
          DropdownMenuItem(
            value: "Erongo",
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Text(
                  "Erongo",
                  style: TextStyle(
                    color: AppColors.primaryText,
                    fontFamily: "Roboto",
                    fontWeight: FontWeight.w600,
                    fontSize: 16,
                  ),
                ),
              ],
            ),
          ),
        ],
        onChanged: (value) {
          setState(() {
            _value = value;
            print(_value);
          });
        },
        hint: Text('All Namibia'),
        value: _value,
        isExpanded: true,
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
      body: Column(
        children: <Widget>[
          Container(
            height: 16,
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
                    "Statistics",
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
          ), // Statistics Heading
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
                      title: 'Confirmed Cases',
                    ),
                    StatisticCounter(
                      width: _wd,
                      count: 0,
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
                      title: 'Recoverd Patients',
                    ),
                    StatisticCounter(
                      width: _wd,
                      count: 19,
                      title: 'Suspected Cases',
                    ),
                  ],
                ),
              ],
            ),
          ), // Statistics Data
          Container(
            height: 16,
            margin: EdgeInsets.only(
              left: 20,
              right: 20,
              top: 30,
            ),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Align(
                  alignment: Alignment.topLeft,
                  child: Container(
                    child: Text(
                      "View By Area",
                      textAlign: TextAlign.left,
                      style: TextStyle(
                        color: AppColors.primaryText,
                        fontWeight: FontWeight.w700,
                        fontSize: 14,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ), // View By Area Heading
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
                  child: _itemDown())), // Drop Down Menu
          Divider(),
          Container(
            height: 70,
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
    );
  }
}
