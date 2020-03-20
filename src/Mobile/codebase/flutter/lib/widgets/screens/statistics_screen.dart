import 'package:covid_19_app/styles/colors.dart';
import 'package:flutter/material.dart';

class StatisticsScreen extends StatefulWidget {
  final String title;
  StatisticsScreen({Key key, this.title}) : super(key: key);

  @override
  _StatisticsScreenState createState() => _StatisticsScreenState();
}

class _StatisticsScreenState extends State<StatisticsScreen> {
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
            height: 45,
            margin: EdgeInsets.only(
              left: 20,
              right: 20,
              top: 86,
              bottom: 86,
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Container(
                  height: 25,
                  child: Row(
                    children: [
                      Text(
                        "Push Notifications",
                        textAlign: TextAlign.left,
                        style: TextStyle(
                          color: AppColors.primaryText,
                          fontFamily: "Roboto",
                          fontWeight: FontWeight.w700,
                          fontSize: 16,
                        ),
                      ),
                      Spacer(),
                      Container(
                        width: 52,
                        height: 32,
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
                    "By Enabling this option you will receive the latest notifications ",
                    textAlign: TextAlign.left,
                    style: TextStyle(
                      color: AppColors.secondaryText,
                      fontSize: 10,
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
