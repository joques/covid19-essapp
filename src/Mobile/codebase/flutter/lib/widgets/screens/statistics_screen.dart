import 'package:covid_19_app/styles/colors.dart';
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
  int confirmedDeaths = 0;
  int confirmedCases = 0;
  int recoveredPatients = 0;
  int suspectedCases = 0;

  //Push Notification Consent
  bool _consent = false;

  //View By Area Drop Down Value
  var _value;

  DropdownButton _itemDown() => DropdownButton<String>(
        items: [
          DropdownMenuItem(
            value: "1",
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Text(
                  "All Namibia",
                ),
              ],
            ),
          ),
          DropdownMenuItem(
            value: "2",
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Text(
                  "Kunene",
                ),
              ],
            ),
          ),
          DropdownMenuItem(
            value: "3",
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Text(
                  "Kavango Region",
                ),
              ],
            ),
          ),
          DropdownMenuItem(
            value: "4",
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Text(
                  "Khomas",
                ),
              ],
            ),
          ),
          DropdownMenuItem(
            value: "5",
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Text(
                  "Erongo",
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
    return Scaffold(
      appBar: AppBar(
        backgroundColor: AppColors.primaryElement,
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
            height: 180,
            margin: EdgeInsets.only(
              left: 20,
              right: 10,
              top: 10,
              bottom: 10,
            ),
            child: Row(
              children: [
                Column(
                  children: <Widget>[
                    Row(
                      children: <Widget>[
                        Container(
                          width: 168,
                          height: 80,
                          decoration: BoxDecoration(
                            color: AppColors.accentElement,
                            borderRadius: BorderRadius.circular(9.0),
                          ),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Container(
                                margin: EdgeInsets.only(
                                    left: 10, right: 10, top: 10),
                                child: Text(
                                  //TODO: Resize Text After 100000
                                  confirmedCases.toString(),
                                  textAlign: TextAlign.left,
                                  style: TextStyle(
                                    color: AppColors.primaryText,
                                    fontWeight: FontWeight.w700,
                                    fontSize: 38,
                                  ),
                                ),
                              ),
                              Spacer(),
                              Container(
                                margin: EdgeInsets.only(
                                    left: 10, right: 10, bottom: 10),
                                child: Text(
                                  "CONFIRMED CASES",
                                  textAlign: TextAlign.left,
                                  style: TextStyle(
                                    color: AppColors.secondaryText,
                                    fontWeight: FontWeight.w700,
                                    fontSize: 13,
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ), //Confirmed Cases
                    SizedBox(
                      width: 10,
                      height: 10,
                    ),
                    Row(
                      children: <Widget>[
                        Container(
                          width: 168,
                          height: 80,
                          decoration: BoxDecoration(
                            color: AppColors.accentElement,
                            borderRadius: BorderRadius.circular(9.0),
                          ),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Container(
                                margin: EdgeInsets.only(
                                    left: 10, right: 10, top: 10),
                                child: Text(
                                  //TODO: Resize Text After 100000
                                  recoveredPatients.toString(),
                                  textAlign: TextAlign.left,
                                  style: TextStyle(
                                    color: AppColors.primaryText,
                                    fontWeight: FontWeight.w700,
                                    fontSize: 38,
                                  ),
                                ),
                              ),
                              Spacer(),
                              Container(
                                margin: EdgeInsets.only(
                                    left: 10, right: 10, bottom: 10),
                                child: Text(
                                  "RECOVERED PATIENTS",
                                  textAlign: TextAlign.left,
                                  style: TextStyle(
                                    color: AppColors.secondaryText,
                                    fontWeight: FontWeight.w700,
                                    fontSize: 13,
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ), // Recovered Patients
                  ],
                ),
                SizedBox(
                  width: 10,
                  height: 10,
                ),
                Column(
                  children: <Widget>[
                    Row(
                      children: <Widget>[
                        Container(
                          width: 168,
                          height: 80,
                          decoration: BoxDecoration(
                            color: AppColors.accentElement,
                            borderRadius: BorderRadius.circular(9.0),
                          ),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Container(
                                margin: EdgeInsets.only(
                                    left: 10, right: 10, top: 10),
                                child: Text(
                                  //TODO: Resize Text After 100000
                                  confirmedDeaths.toString(),
                                  textAlign: TextAlign.left,
                                  style: TextStyle(
                                    color: AppColors.primaryText,
                                    fontWeight: FontWeight.w700,
                                    fontSize: 38,
                                  ),
                                ),
                              ),
                              Spacer(),
                              Container(
                                margin: EdgeInsets.only(
                                    left: 10, right: 10, bottom: 10),
                                child: Text(
                                  "CONFIRMED DEATHS",
                                  textAlign: TextAlign.left,
                                  style: TextStyle(
                                    color: AppColors.secondaryText,
                                    fontWeight: FontWeight.w700,
                                    fontSize: 13,
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ), // Confirmed Deaths
                    SizedBox(
                      width: 10,
                      height: 10,
                    ),
                    Row(
                      children: <Widget>[
                        Container(
                          width: 168,
                          height: 80,
                          decoration: BoxDecoration(
                            color: AppColors.accentElement,
                            borderRadius: BorderRadius.circular(9.0),
                          ),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Container(
                                margin: EdgeInsets.only(
                                    left: 10, right: 10, top: 10),
                                child: Text(
                                  //TODO: Resize Text After 100000
                                  suspectedCases.toString(),
                                  textAlign: TextAlign.left,
                                  style: TextStyle(
                                    color: AppColors.primaryText,
                                    fontWeight: FontWeight.w700,
                                    fontSize: 38,
                                  ),
                                ),
                              ),
                              Spacer(),
                              Container(
                                margin: EdgeInsets.only(
                                    left: 10, right: 10, bottom: 10),
                                child: Text(
                                  "SUSPECTED CASES",
                                  textAlign: TextAlign.left,
                                  style: TextStyle(
                                    color: AppColors.secondaryText,
                                    fontWeight: FontWeight.w700,
                                    fontSize: 13,
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ), // Suspected Cases
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
              top: 15,
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
                          value: true,
                          inactiveTrackColor: Color.fromARGB(60, 0, 0, 0),
                          onChanged: (value) {
                            setState(() {
                              _consent = value;
                              print(_consent);
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
