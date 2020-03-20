/*
*  tab_bar_widget.dart
*  covid19-essapp
*
*  Created by UI Team.
*  Copyright © 2018 na.nust. All rights reserved.
    */

import 'package:covid19_essapp/screens/detailed_statistics_widget/detailed_statistics_widget.dart';
import 'package:covid19_essapp/screens/general_info_widget/general_info_widget.dart';
import 'package:covid19_essapp/screens/official_circulars_memos_widget/official_circulars_memos_widget.dart';
import 'package:covid19_essapp/screens/testing_centres_widget/testing_centres_widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class TabBarWidget extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => _TabBarWidgetState();
}

class _TabBarWidgetState extends State<TabBarWidget> {
  List<Widget> _tabWidgets = [
    GeneralInfoWidget(),
    TestingCentresWidget(),
    DetailedStatisticsWidget(),
    OfficialCircularsMemosWidget(),
  ];
  int _currentIndex = 0;

  void _onTabChanged(int index) => this.setState(() => _currentIndex = index);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _tabWidgets[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed,
        fixedColor: Color.fromARGB(255, 85, 85, 85),
        currentIndex: _currentIndex,
        onTap: (index) => this._onTabChanged(index),
        items: [
          BottomNavigationBarItem(
            icon: Image.asset(
              "assets/images/feed.png",
              width: 48,
              height: 48,
            ),
            title: Text(
              "General",
              textAlign: TextAlign.left,
              style: TextStyle(
                color: Color.fromARGB(255, 0, 0, 0),
                fontWeight: FontWeight.w400,
                fontSize: 12,
              ),
            ),
          ),
          BottomNavigationBarItem(
            icon: Image.asset(
              "assets/images/iconfinder-hospital-building-nursing-healthcare-medical-5729680-1.png",
              width: 48,
              height: 48,
            ),
            title: Text(
              "Testing Centers",
              textAlign: TextAlign.left,
              style: TextStyle(
                color: Color.fromARGB(255, 0, 0, 0),
                fontWeight: FontWeight.w400,
                fontSize: 12,
              ),
            ),
          ),
          BottomNavigationBarItem(
            icon: Image.asset(
              "assets/images/alert-2.png",
              width: 48,
              height: 48,
            ),
            title: Text(
              "Statistics",
              textAlign: TextAlign.left,
              style: TextStyle(
                color: Color.fromARGB(255, 0, 0, 0),
                fontWeight: FontWeight.w400,
                fontSize: 12,
              ),
            ),
          ),
          BottomNavigationBarItem(
            icon: Image.asset(
              "assets/images/path-35-3.png",
              width: 48,
              height: 48,
            ),
            title: Text(
              "Circulars",
              textAlign: TextAlign.left,
              style: TextStyle(
                color: Color.fromARGB(255, 0, 0, 0),
                fontWeight: FontWeight.w400,
                fontSize: 12,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
