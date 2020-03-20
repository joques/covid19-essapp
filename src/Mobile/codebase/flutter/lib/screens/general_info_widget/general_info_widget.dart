/*
*  general_info_widget.dart
*  covid19-essapp
*
*  Created by UI Team.
*  Copyright © 2018 na.nust. All rights reserved.
    */

import 'package:covid19_essapp/widgets/prevention_widget/prevention_widget.dart';
import 'package:covid19_essapp/widgets/symptoms_widget/symptoms_widget.dart';
import 'package:covid19_essapp/values/values.dart';
import 'package:flutter/material.dart';

class GeneralInfoWidget extends StatelessWidget {
  void onViewValueChanged(BuildContext context) {}

  void onDetailsPressed(BuildContext context) {}

  void onSymptomsPressed(BuildContext context) => Navigator.push(
      context, MaterialPageRoute(builder: (context) => SymptomsWidget()));

  void onPreventionPressed(BuildContext context) => Navigator.push(
      context, MaterialPageRoute(builder: (context) => Prevention5Widget()));

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      extendBodyBehindAppBar: true,
      appBar: AppBar(
        title: Text(
          "GENERAL INFORMATION",
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
              left: 15,
              top: 88,
              right: 15,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Container(
                    height: 144,
                    margin: EdgeInsets.only(right: 4),
                    child: Stack(
                      alignment: Alignment.topRight,
                      children: [
                        Positioned(
                          top: 26,
                          right: 20,
                          child: Image.asset(
                            "assets/images/path-773.png",
                            fit: BoxFit.none,
                          ),
                        ),
                        Positioned(
                          left: 0,
                          top: 0,
                          right: 0,
                          child: Opacity(
                            opacity: 0.49666,
                            child: Container(
                              height: 144,
                              decoration: BoxDecoration(
                                color: AppColors.secondaryBackground,
                                borderRadius: Radii.k10pxRadius,
                              ),
                              child: Container(),
                            ),
                          ),
                        ),
                        Positioned(
                          left: 20,
                          top: 0,
                          right: 88,
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.stretch,
                            children: [
                              Text(
                                "What is CoronaVirus (COVID-19)?",
                                textAlign: TextAlign.left,
                                style: TextStyle(
                                  color: AppColors.primaryText,
                                  fontFamily: "Arial",
                                  fontWeight: FontWeight.w700,
                                  fontSize: 22,
                                ),
                              ),
                              Container(
                                margin: EdgeInsets.only(right: 21),
                                child: Text(
                                  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
                                  textAlign: TextAlign.left,
                                  style: TextStyle(
                                    color: AppColors.secondaryText,
                                    fontFamily: "Arial",
                                    fontWeight: FontWeight.w400,
                                    fontSize: 13,
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                  Container(
                    height: 38,
                    margin: EdgeInsets.only(right: 4),
                    child: Container(),
                  ),
                  Align(
                    alignment: Alignment.topCenter,
                    child: Container(
                      width: 298,
                      height: 34,
                      margin: EdgeInsets.only(top: 10),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Container(
                            width: 126,
                            height: 34,
                            child: FlatButton(
                              onPressed: () => this.onSymptomsPressed(context),
                              color: AppColors.primaryElement,
                              shape: RoundedRectangleBorder(
                                borderRadius:
                                    BorderRadius.all(Radius.circular(17)),
                              ),
                              textColor: Color.fromARGB(255, 255, 255, 255),
                              padding: EdgeInsets.all(0),
                              child: Text(
                                "SYMPTOMS",
                                textAlign: TextAlign.center,
                                style: TextStyle(
                                  color: Color.fromARGB(255, 255, 255, 255),
                                  fontFamily: "Roboto",
                                  fontWeight: FontWeight.w700,
                                  fontSize: 12,
                                ),
                              ),
                            ),
                          ),
                          Spacer(),
                          Container(
                            width: 132,
                            height: 34,
                            child: FlatButton(
                              onPressed: () =>
                                  this.onPreventionPressed(context),
                              color: AppColors.primaryElement,
                              shape: RoundedRectangleBorder(
                                borderRadius:
                                    BorderRadius.all(Radius.circular(17)),
                              ),
                              textColor: Color.fromARGB(255, 255, 255, 255),
                              padding: EdgeInsets.all(0),
                              child: Text(
                                "PREVENTION",
                                textAlign: TextAlign.center,
                                style: TextStyle(
                                  color: Color.fromARGB(255, 255, 255, 255),
                                  fontFamily: "Roboto",
                                  fontWeight: FontWeight.w700,
                                  fontSize: 12,
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  Container(
                    height: 200,
                    margin: EdgeInsets.only(top: 34),
                    child: Column(
                      children: [
                        Container(
                          width: 342,
                          height: 19,
                          child: Row(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Container(
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
                              Spacer(),
                              Container(
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
                            ],
                          ),
                        ),
                        Container(
                          width: 345,
                          height: 167,
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.center,
                            children: [
                              Container(
                                width: 345,
                                height: 80,
                                child: Row(
                                  crossAxisAlignment:
                                      CrossAxisAlignment.stretch,
                                  children: [
                                    Container(
                                      width: 168,
                                      height: 80,
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
                                                  alignment: Alignment.topLeft,
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
                                                  alignment: Alignment.topLeft,
                                                  child: Container(
                                                    margin:
                                                        EdgeInsets.only(top: 3),
                                                    child: Text(
                                                      "CONFIRMED CASES",
                                                      textAlign: TextAlign.left,
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
                                    Container(
                                      width: 168,
                                      height: 80,
                                      child: Stack(
                                        alignment: Alignment.topRight,
                                        children: [
                                          Positioned(
                                            top: 9,
                                            right: 20,
                                            child: Column(
                                              crossAxisAlignment:
                                                  CrossAxisAlignment.stretch,
                                              children: [
                                                Align(
                                                  alignment: Alignment.topRight,
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
                                                  alignment: Alignment.topRight,
                                                  child: Container(
                                                    margin:
                                                        EdgeInsets.only(top: 3),
                                                    child: Text(
                                                      "CONFIRMED DEATHS",
                                                      textAlign: TextAlign.left,
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
                                        ],
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                              Container(
                                width: 345,
                                height: 80,
                                child: Row(
                                  crossAxisAlignment:
                                      CrossAxisAlignment.stretch,
                                  children: [
                                    Container(
                                      width: 168,
                                      height: 80,
                                      child: Stack(
                                        alignment: Alignment.bottomLeft,
                                        children: [
                                          Positioned(
                                            left: 73,
                                            top: 5,
                                            child: Text(
                                              "0",
                                              textAlign: TextAlign.left,
                                              style: TextStyle(
                                                color: AppColors.primaryText,
                                                fontFamily: "Arial",
                                                fontWeight: FontWeight.w700,
                                                fontSize: 38,
                                              ),
                                            ),
                                          ),
                                          Positioned(
                                            left: 0,
                                            bottom: 0,
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
                                          Positioned(
                                            left: 17,
                                            bottom: 15,
                                            child: Text(
                                              "RECOVERED PATIENTS",
                                              textAlign: TextAlign.left,
                                              style: TextStyle(
                                                color: AppColors.secondaryText,
                                                fontFamily: "Roboto",
                                                fontWeight: FontWeight.w700,
                                                fontSize: 13,
                                              ),
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                    Container(
                                      width: 168,
                                      height: 80,
                                      child: Stack(
                                        alignment: Alignment.bottomRight,
                                        children: [
                                          Positioned(
                                            top: 3,
                                            right: 24,
                                            bottom: 15,
                                            child: Column(
                                              crossAxisAlignment:
                                                  CrossAxisAlignment.stretch,
                                              children: [
                                                Align(
                                                  alignment: Alignment.topRight,
                                                  child: Container(
                                                    margin: EdgeInsets.only(
                                                        right: 49),
                                                    child: Text(
                                                      "3",
                                                      textAlign: TextAlign.left,
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
                                                Spacer(),
                                                Align(
                                                  alignment: Alignment.topRight,
                                                  child: Text(
                                                    "SUSPECTED CASES",
                                                    textAlign: TextAlign.left,
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
                                              ],
                                            ),
                                          ),
                                          Positioned(
                                            right: 0,
                                            bottom: 0,
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
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                  Align(
                    alignment: Alignment.topCenter,
                    child: Container(
                      width: 142,
                      height: 35,
                      child: FlatButton(
                        onPressed: () => this.onDetailsPressed(context),
                        color: Color.fromARGB(255, 159, 0, 82),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.all(Radius.circular(17.5)),
                        ),
                        textColor: Color.fromARGB(255, 239, 239, 239),
                        padding: EdgeInsets.all(0),
                        child: Text(
                          "Detailed Statistics",
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            color: AppColors.accentText,
                            fontFamily: "Roboto",
                            fontWeight: FontWeight.w700,
                            fontSize: 13,
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
            Positioned(
              child: Container(
                width: 344,
                height: 3,
                decoration: BoxDecoration(
                  color: AppColors.accentElement,
                ),
                child: Container(),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
