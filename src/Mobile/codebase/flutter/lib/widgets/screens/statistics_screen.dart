import 'package:covid_19_app/styles/colors.dart';
import 'package:flutter/material.dart';

class StatisticsScreen extends StatefulWidget {
  final String title;
  StatisticsScreen({Key key, this.title}) : super(key: key);

  @override
  _StatisticsScreenState createState() => _StatisticsScreenState();
}

class _StatisticsScreenState extends State<StatisticsScreen> {
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
        title: Text(
          widget.title,
        ),
        centerTitle: true,
      ),
      body: Column(
        children: <Widget>[
          Container(
            height: 70,
            margin: EdgeInsets.only(
              left: 20,
              right: 20,
              top: 15,
              bottom: 15,
            ),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Align(
                  alignment: Alignment.topLeft,
                  child: Container(
                    width: 79,
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
                ),
                Spacer(),
                Align(
                  alignment: Alignment.topLeft,
                  child: Container(
                    margin: EdgeInsets.only(top: 3),
                    child: Text(
                      "As of Thur, 19 March 2020, 7:30 am",
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        color: AppColors.secondaryText,
                        fontWeight: FontWeight.w400,
                        fontSize: 13,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
          Container(
            height: 120,
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
                            height: 50,
                            width: 50,
                            decoration: BoxDecoration(
                              color: AppColors.accentElement,
                              borderRadius: BorderRadius.circular(9.0),
                            ),
                            child: Container()),
                      ],
                    ),
                    SizedBox(
                      width: 10,
                      height: 10,
                    ),
                    Row(
                      children: <Widget>[
                        Container(
                            height: 50,
                            width: 50,
                            decoration: BoxDecoration(
                              color: AppColors.accentElement,
                              borderRadius: BorderRadius.circular(9.0),
                            ),
                            child: Container()),
                      ],
                    ),
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
                            height: 50,
                            width: 50,
                            decoration: BoxDecoration(
                              color: AppColors.accentElement,
                              borderRadius: BorderRadius.circular(9.0),
                            ),
                            child: Container()),
                      ],
                    ),
                    SizedBox(
                      width: 10,
                      height: 10,
                    ),
                    Row(
                      children: <Widget>[
                        Container(
                            height: 50,
                            width: 50,
                            decoration: BoxDecoration(
                              color: AppColors.accentElement,
                              borderRadius: BorderRadius.circular(9.0),
                            ),
                            child: Container()),
                      ],
                    ),
                  ],
                ),
              ],
            ),
          ),
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
                  child: _itemDown())),
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
                        child: Switch.adaptive(
                          value: true,
                          inactiveTrackColor: Color.fromARGB(60, 0, 0, 0),
                          onChanged: (value) {},
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
          ),
        ],
      ),
    );
  }
}
