/*
*  prevention_widget.dart
*  covid19-essapp
*
*  Created by UI Team.
*  Copyright © 2018 na.nust. All rights reserved.
    */

import 'package:covid19_essapp/values/values.dart';
import 'package:flutter/material.dart';

class Prevention5Widget extends StatelessWidget {
  void onGroup792ValueChanged(BuildContext context) {}

  void onFindHelpPressed(BuildContext context) {}

  void onBackwardArrowPressed(BuildContext context) => Navigator.pop(context);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      extendBodyBehindAppBar: true,
      appBar: AppBar(
        title: Text(
          "PREVENTION",
          textAlign: TextAlign.center,
          style: TextStyle(
            color: AppColors.accentText,
            fontFamily: "Roboto",
            fontWeight: FontWeight.w700,
            fontSize: 14,
          ),
        ),
        leading: IconButton(
          onPressed: () => this.onBackwardArrowPressed(context),
          icon: Image.asset(
            "assets/images/backward-arrow.png",
          ),
        ),
        backgroundColor: Color.fromARGB(255, 40, 53, 67),
      ),
      body: Container(
        constraints: BoxConstraints.expand(),
        decoration: BoxDecoration(
          color: Color.fromARGB(255, 246, 248, 250),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Container(
              height: 175,
              margin: EdgeInsets.only(left: 15, top: 83, right: 19),
              child: Stack(
                alignment: Alignment.center,
                children: [
                  Positioned(
                    top: 138,
                    child: Container(),
                  ),
                  Positioned(
                    left: 0,
                    top: 0,
                    right: 0,
                    child: Container(
                      height: 144,
                      decoration: BoxDecoration(
                        color: AppColors.secondaryBackground,
                        borderRadius: Radii.k10pxRadius,
                      ),
                      child: Stack(
                        alignment: Alignment.topCenter,
                        children: [
                          Positioned(
                            left: 20,
                            top: 18,
                            right: 20,
                            child: Stack(
                              alignment: Alignment.center,
                              children: [
                                Positioned(
                                  left: 0,
                                  top: 0,
                                  right: 68,
                                  child: Text(
                                    "What is CoronaVirus (COVID-19)?",
                                    textAlign: TextAlign.left,
                                    style: TextStyle(
                                      color: AppColors.primaryText,
                                      fontFamily: "Arial",
                                      fontWeight: FontWeight.w700,
                                      fontSize: 22,
                                    ),
                                  ),
                                ),
                                Positioned(
                                  top: 8,
                                  right: 0,
                                  child: Image.asset(
                                    "assets/images/path-773.png",
                                    fit: BoxFit.none,
                                  ),
                                ),
                              ],
                            ),
                          ),
                          Positioned(
                            left: 20,
                            top: 0,
                            right: 109,
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
                  ),
                ],
              ),
            ),
            Align(
              alignment: Alignment.topCenter,
              child: Container(
                width: 335,
                height: 3,
                child: Image.asset(
                  "assets/images/line-4.png",
                  fit: BoxFit.cover,
                ),
              ),
            ),
            Align(
              alignment: Alignment.topLeft,
              child: Container(
                width: 273,
                height: 42,
                margin: EdgeInsets.only(left: 24, top: 15),
                child: Row(
                  children: [
                    Container(
                      width: 42,
                      height: 41,
                      child: Image.asset(
                        "assets/images/iconfinder-hands-washing-clean-hygiene-soap-5729675.png",
                        fit: BoxFit.none,
                      ),
                    ),
                    Expanded(
                      flex: 1,
                      child: Container(
                        margin: EdgeInsets.only(left: 16),
                        child: Text(
                          "Wash your hands frequently with soap in running water.",
                          textAlign: TextAlign.left,
                          style: TextStyle(
                            color: AppColors.primaryText,
                            fontFamily: "Roboto",
                            fontWeight: FontWeight.w400,
                            fontSize: 16,
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
            Container(
              height: 58,
              margin: EdgeInsets.only(left: 27, top: 20, right: 15),
              child: Row(
                children: [
                  Align(
                    alignment: Alignment.topLeft,
                    child: Container(
                      width: 39,
                      height: 39,
                      margin: EdgeInsets.only(top: 3),
                      child: Image.asset(
                        "assets/images/iconfinder-temperature-check-flu-scan-thermometer-heat-5729695.png",
                        fit: BoxFit.none,
                      ),
                    ),
                  ),
                  Expanded(
                    flex: 1,
                    child: Container(
                      margin: EdgeInsets.only(left: 16),
                      child: Text(
                        "Cover your mouth and nose with a flexed elbow or tissue when coughing or sneezing.",
                        textAlign: TextAlign.left,
                        style: TextStyle(
                          color: AppColors.primaryText,
                          fontFamily: "Roboto",
                          fontWeight: FontWeight.w400,
                          fontSize: 16,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
            Container(
              height: 41,
              margin: EdgeInsets.only(left: 26, top: 6, right: 78),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                    width: 40,
                    height: 41,
                    child: Image.asset(
                      "assets/images/iconfinder-transfer-viral-transmission-infection-human-communication-engagement-5729690.png",
                      fit: BoxFit.none,
                    ),
                  ),
                  Expanded(
                    flex: 1,
                    child: Container(
                      margin: EdgeInsets.only(left: 16, top: 8),
                      child: Text(
                        "Keep a distance",
                        textAlign: TextAlign.left,
                        style: TextStyle(
                          color: AppColors.primaryText,
                          fontFamily: "Roboto",
                          fontWeight: FontWeight.w400,
                          fontSize: 16,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
            Container(
              height: 37,
              margin: EdgeInsets.only(left: 31, top: 18, right: 78),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                    width: 39,
                    height: 37,
                    child: Image.asset(
                      "assets/images/iconfinder-doctor-advise-warning-suggestion-avatar-5729672.png",
                      fit: BoxFit.none,
                    ),
                  ),
                  Expanded(
                    flex: 1,
                    child: Container(
                      margin: EdgeInsets.only(left: 12, top: 11),
                      child: Text(
                        "Avoid Touching your face",
                        textAlign: TextAlign.left,
                        style: TextStyle(
                          color: AppColors.primaryText,
                          fontFamily: "Roboto",
                          fontWeight: FontWeight.w400,
                          fontSize: 16,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
            Spacer(),
            Align(
              alignment: Alignment.topCenter,
              child: Container(
                width: 286,
                height: 50,
                margin: EdgeInsets.only(bottom: 5),
                child: FlatButton(
                  onPressed: () => this.onFindHelpPressed(context),
                  color: AppColors.primaryElement,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.all(Radius.circular(24)),
                  ),
                  textColor: Color.fromARGB(255, 255, 255, 255),
                  padding: EdgeInsets.all(0),
                  child: Text(
                    "FIND HELP",
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
            ),
            Container(
              margin: EdgeInsets.only(left: 50, right: 36, bottom: 61),
              child: Text(
                "By Pressing This Button We Your Are Accepting Terms of Service\nand That You Have Answered The Questions Truthfuly",
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: AppColors.secondaryText,
                  fontFamily: "Arial",
                  fontWeight: FontWeight.w400,
                  fontSize: 10,
                  height: 1.8,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
