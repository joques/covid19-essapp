/*
*  detailed_statistics_widget.dart
*  covid19-essapp
*
*  Created by UI Team.
*  Copyright © 2018 na.nust. All rights reserved.
    */

import 'package:covid19_essapp/values/values.dart';
import 'package:flutter/material.dart';

class DetailedStatisticsWidget extends StatelessWidget {
  void onGroup736ValueChanged(BuildContext context) {}

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      extendBodyBehindAppBar: true,
      appBar: AppBar(
        title: Text(
          "DETAILED STATISTICS",
          textAlign: TextAlign.center,
          style: TextStyle(
            color: AppColors.accentText,
            fontFamily: "Roboto",
            fontWeight: FontWeight.w700,
            fontSize: 14,
          ),
        ),
        automaticallyImplyLeading: false,
        backgroundColor: Color.fromARGB(255, 40, 53, 67),
      ),
      body: Container(
        constraints: BoxConstraints.expand(),
        decoration: BoxDecoration(
          color: Color.fromARGB(255, 255, 255, 255),
        ),
        child: Stack(
          alignment: Alignment.center,
          children: [
            Positioned(
              left: 14,
              right: 14,
              child: Container(
                height: 49,
                decoration: BoxDecoration(
                  color: AppColors.accentElement,
                  borderRadius: Radii.k10pxRadius,
                ),
                child: Row(
                  children: [
                    Container(
                      width: 130,
                      margin: EdgeInsets.only(left: 20),
                      child: Text(
                        "All of Namibia",
                        textAlign: TextAlign.left,
                        style: TextStyle(
                          color: AppColors.primaryText,
                          fontFamily: "Roboto",
                          fontWeight: FontWeight.w400,
                          fontSize: 16,
                        ),
                      ),
                    ),
                    Spacer(),
                    Container(
                      width: 17,
                      height: 11,
                      margin: EdgeInsets.only(right: 16),
                      child: Image.asset(
                        "assets/images/-1.png",
                        fit: BoxFit.none,
                      ),
                    ),
                  ],
                ),
              ),
            ),
            Positioned(
              left: 15,
              top: 82,
              right: 15,
              bottom: 98,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Container(
                    height: 19,
                    margin: EdgeInsets.only(left: 1, right: 4),
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
                                fontFamily: "Arial",
                                fontWeight: FontWeight.w400,
                                fontSize: 10,
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Expanded(
                    flex: 1,
                    child: Align(
                      alignment: Alignment.topCenter,
                      child: Container(
                        width: 346,
                        margin: EdgeInsets.only(top: 20, bottom: 86),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.stretch,
                          children: [
                            Expanded(
                              flex: 1,
                              child: Container(
                                margin: EdgeInsets.only(bottom: 10),
                                child: Row(
                                  crossAxisAlignment:
                                      CrossAxisAlignment.stretch,
                                  children: [
                                    Expanded(
                                      flex: 1,
                                      child: Container(
                                        margin: EdgeInsets.only(right: 10),
                                        child: Stack(
                                          children: [
                                            Positioned(
                                              left: 26,
                                              top: 9,
                                              child: Column(
                                                crossAxisAlignment:
                                                    CrossAxisAlignment.stretch,
                                                children: [
                                                  Align(
                                                    alignment:
                                                        Alignment.topLeft,
                                                    child: Container(
                                                      margin: EdgeInsets.only(
                                                          left: 46),
                                                      child: Text(
                                                        "1",
                                                        textAlign:
                                                            TextAlign.center,
                                                        style: TextStyle(
                                                          color: AppColors
                                                              .primaryText,
                                                          fontFamily: "Arial",
                                                          fontWeight:
                                                              FontWeight.w700,
                                                          fontSize: 38,
                                                        ),
                                                      ),
                                                    ),
                                                  ),
                                                  Align(
                                                    alignment:
                                                        Alignment.topLeft,
                                                    child: Container(
                                                      margin: EdgeInsets.only(
                                                          top: 3),
                                                      child: Text(
                                                        "CONFIRMED CASES",
                                                        textAlign:
                                                            TextAlign.left,
                                                        style: TextStyle(
                                                          color: AppColors
                                                              .secondaryText,
                                                          fontFamily: "Roboto",
                                                          fontWeight:
                                                              FontWeight.w700,
                                                          fontSize: 13,
                                                        ),
                                                      ),
                                                    ),
                                                  ),
                                                ],
                                              ),
                                            ),
                                            Positioned(
                                              left: 0,
                                              top: 0,
                                              child: Opacity(
                                                opacity: 0.30305,
                                                child: Container(
                                                  width: 168,
                                                  height: 80,
                                                  decoration: BoxDecoration(
                                                    color: AppColors
                                                        .primaryBackground,
                                                    borderRadius:
                                                        Radii.k10pxRadius,
                                                  ),
                                                  child: Container(),
                                                ),
                                              ),
                                            ),
                                          ],
                                        ),
                                      ),
                                    ),
                                    Expanded(
                                      flex: 1,
                                      child: Container(
                                        margin: EdgeInsets.only(left: 10),
                                        child: Stack(
                                          alignment: Alignment.topRight,
                                          children: [
                                            Positioned(
                                              top: 0,
                                              right: 0,
                                              child: Opacity(
                                                opacity: 0.29807,
                                                child: Container(
                                                  width: 168,
                                                  height: 80,
                                                  decoration: BoxDecoration(
                                                    color: AppColors
                                                        .primaryBackground,
                                                    borderRadius:
                                                        Radii.k10pxRadius,
                                                  ),
                                                  child: Container(),
                                                ),
                                              ),
                                            ),
                                            Positioned(
                                              top: 9,
                                              right: 20,
                                              child: Column(
                                                crossAxisAlignment:
                                                    CrossAxisAlignment.stretch,
                                                children: [
                                                  Align(
                                                    alignment:
                                                        Alignment.topRight,
                                                    child: Container(
                                                      margin: EdgeInsets.only(
                                                          right: 52),
                                                      child: Opacity(
                                                        opacity: 0.99732,
                                                        child: Text(
                                                          "0",
                                                          textAlign:
                                                              TextAlign.left,
                                                          style: TextStyle(
                                                            color: AppColors
                                                                .primaryText,
                                                            fontFamily: "Arial",
                                                            fontWeight:
                                                                FontWeight.w700,
                                                            fontSize: 38,
                                                          ),
                                                        ),
                                                      ),
                                                    ),
                                                  ),
                                                  Align(
                                                    alignment:
                                                        Alignment.topRight,
                                                    child: Container(
                                                      margin: EdgeInsets.only(
                                                          top: 3),
                                                      child: Text(
                                                        "CONFIRMED DEATHS",
                                                        textAlign:
                                                            TextAlign.left,
                                                        style: TextStyle(
                                                          color: AppColors
                                                              .secondaryText,
                                                          fontFamily: "Roboto",
                                                          fontWeight:
                                                              FontWeight.w700,
                                                          fontSize: 13,
                                                        ),
                                                      ),
                                                    ),
                                                  ),
                                                ],
                                              ),
                                            ),
                                          ],
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                            Expanded(
                              flex: 1,
                              child: Container(
                                margin: EdgeInsets.only(top: 10),
                                child: Row(
                                  crossAxisAlignment:
                                      CrossAxisAlignment.stretch,
                                  children: [
                                    Expanded(
                                      flex: 1,
                                      child: Container(
                                        margin: EdgeInsets.only(right: 10),
                                        child: Stack(
                                          children: [
                                            Positioned(
                                              left: 17,
                                              top: 3,
                                              child: Column(
                                                crossAxisAlignment:
                                                    CrossAxisAlignment.stretch,
                                                children: [
                                                  Align(
                                                    alignment:
                                                        Alignment.topLeft,
                                                    child: Container(
                                                      margin: EdgeInsets.only(
                                                          left: 55),
                                                      child: Text(
                                                        "1",
                                                        textAlign:
                                                            TextAlign.left,
                                                        style: TextStyle(
                                                          color: AppColors
                                                              .primaryText,
                                                          fontFamily: "Arial",
                                                          fontWeight:
                                                              FontWeight.w700,
                                                          fontSize: 38,
                                                        ),
                                                      ),
                                                    ),
                                                  ),
                                                  Align(
                                                    alignment:
                                                        Alignment.topLeft,
                                                    child: Container(
                                                      margin: EdgeInsets.only(
                                                          top: 3),
                                                      child: Text(
                                                        "RECOVERED PATIENTS",
                                                        textAlign:
                                                            TextAlign.left,
                                                        style: TextStyle(
                                                          color: AppColors
                                                              .secondaryText,
                                                          fontFamily: "Roboto",
                                                          fontWeight:
                                                              FontWeight.w700,
                                                          fontSize: 13,
                                                        ),
                                                      ),
                                                    ),
                                                  ),
                                                ],
                                              ),
                                            ),
                                            Positioned(
                                              left: 0,
                                              top: 0,
                                              child: Opacity(
                                                opacity: 0.30305,
                                                child: Container(
                                                  width: 168,
                                                  height: 80,
                                                  decoration: BoxDecoration(
                                                    color: AppColors
                                                        .primaryBackground,
                                                    borderRadius:
                                                        Radii.k10pxRadius,
                                                  ),
                                                  child: Container(),
                                                ),
                                              ),
                                            ),
                                          ],
                                        ),
                                      ),
                                    ),
                                    Expanded(
                                      flex: 1,
                                      child: Container(
                                        margin: EdgeInsets.only(left: 10),
                                        child: Stack(
                                          alignment: Alignment.topRight,
                                          children: [
                                            Positioned(
                                              top: 3,
                                              right: 24,
                                              child: Column(
                                                crossAxisAlignment:
                                                    CrossAxisAlignment.stretch,
                                                children: [
                                                  Align(
                                                    alignment:
                                                        Alignment.topRight,
                                                    child: Container(
                                                      margin: EdgeInsets.only(
                                                          right: 49),
                                                      child: Text(
                                                        "3",
                                                        textAlign:
                                                            TextAlign.left,
                                                        style: TextStyle(
                                                          color: AppColors
                                                              .primaryText,
                                                          fontFamily: "Arial",
                                                          fontWeight:
                                                              FontWeight.w700,
                                                          fontSize: 38,
                                                        ),
                                                      ),
                                                    ),
                                                  ),
                                                  Align(
                                                    alignment:
                                                        Alignment.topRight,
                                                    child: Container(
                                                      margin: EdgeInsets.only(
                                                          top: 3),
                                                      child: Text(
                                                        "SUSPECTED CASES",
                                                        textAlign:
                                                            TextAlign.left,
                                                        style: TextStyle(
                                                          color: AppColors
                                                              .secondaryText,
                                                          fontFamily: "Roboto",
                                                          fontWeight:
                                                              FontWeight.w700,
                                                          fontSize: 13,
                                                        ),
                                                      ),
                                                    ),
                                                  ),
                                                ],
                                              ),
                                            ),
                                            Positioned(
                                              top: 0,
                                              right: 0,
                                              child: Opacity(
                                                opacity: 0.30305,
                                                child: Container(
                                                  width: 168,
                                                  height: 80,
                                                  decoration: BoxDecoration(
                                                    color: AppColors
                                                        .primaryBackground,
                                                    borderRadius:
                                                        Radii.k10pxRadius,
                                                  ),
                                                  child: Container(),
                                                ),
                                              ),
                                            ),
                                          ],
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                  Container(
                    height: 45,
                    margin: EdgeInsets.only(left: 3, top: 86, right: 3),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        Container(
                          height: 24,
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
                                  inactiveTrackColor:
                                      Color.fromARGB(60, 0, 0, 0),
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
                              fontFamily: "Arial",
                              fontWeight: FontWeight.w400,
                              fontSize: 10,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Align(
                    alignment: Alignment.topCenter,
                    child: Text(
                      "This Data is provided to you by the Ministry of …",
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        color: AppColors.secondaryText,
                        fontFamily: "Arial",
                        fontWeight: FontWeight.w400,
                        fontSize: 10,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
