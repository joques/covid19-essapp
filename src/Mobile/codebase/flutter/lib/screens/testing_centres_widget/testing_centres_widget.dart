/*
*  testing_centres_widget.dart
*  covid19-essapp
*
*  Created by UI Team.
*  Copyright © 2018 na.nust. All rights reserved.
    */

import 'package:covid19_essapp/values/values.dart';
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';

class TestingCentresWidget extends StatelessWidget {
  void onGroup736ValueChanged(BuildContext context) {}

  void onFindNearestPressed(BuildContext context) {}

  void onLocationFinderPressed(BuildContext context) {}

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      extendBodyBehindAppBar: true,
      appBar: AppBar(
        title: Text(
          "TESTING CENTERS",
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
              left: 9,
              top: 87,
              right: 9,
              bottom: 103,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Container(
                    height: 199,
                    margin: EdgeInsets.symmetric(horizontal: 9),
                    child: GoogleMap(
                      initialCameraPosition: CameraPosition(target: null),
                      onMapCreated: (controller) {},
                    ),
                  ),
                  Spacer(),
                  Container(
                    height: 46,
                    margin: EdgeInsets.only(left: 9, right: 9, bottom: 76),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        Expanded(
                          flex: 1,
                          child: Container(
                            height: 46,
                            margin: EdgeInsets.only(right: 66),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.stretch,
                              children: [
                                Container(
                                  height: 17,
                                  margin: EdgeInsets.only(right: 69),
                                  child: Row(
                                    children: [
                                      Text(
                                        "From",
                                        textAlign: TextAlign.left,
                                        style: TextStyle(
                                          color: AppColors.secondaryText,
                                          fontFamily: "Arial",
                                          fontWeight: FontWeight.w400,
                                          fontSize: 14,
                                        ),
                                      ),
                                      Text(
                                        "Current Location",
                                        textAlign: TextAlign.left,
                                        style: TextStyle(
                                          color: AppColors.primaryText,
                                          fontFamily: "Arial",
                                          fontWeight: FontWeight.w700,
                                          fontSize: 14,
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                                Container(
                                  height: 17,
                                  child: Row(
                                    children: [
                                      Text(
                                        "To",
                                        textAlign: TextAlign.left,
                                        style: TextStyle(
                                          color: AppColors.secondaryText,
                                          fontFamily: "Arial",
                                          fontWeight: FontWeight.w400,
                                          fontSize: 14,
                                        ),
                                      ),
                                      Text(
                                        "13 Jackson Kaujeua Street.",
                                        textAlign: TextAlign.left,
                                        style: TextStyle(
                                          color: AppColors.primaryText,
                                          fontFamily: "Arial",
                                          fontWeight: FontWeight.w700,
                                          fontSize: 14,
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                        Align(
                          alignment: Alignment.bottomLeft,
                          child: Container(
                            width: 37,
                            height: 37,
                            margin: EdgeInsets.only(bottom: 4),
                            child: FlatButton(
                              onPressed: () =>
                                  this.onLocationFinderPressed(context),
                              color: AppColors.primaryElement,
                              shape: RoundedRectangleBorder(
                                borderRadius:
                                    BorderRadius.all(Radius.circular(18.5)),
                              ),
                              textColor: Color.fromARGB(255, 0, 0, 0),
                              padding: EdgeInsets.all(0),
                              child: Row(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [
                                  Image.asset(
                                    "assets/images/symbol-113--1.png",
                                  ),
                                  SizedBox(
                                    width: 10,
                                  ),
                                  Text(
                                    "",
                                    textAlign: TextAlign.left,
                                    style: TextStyle(
                                      color: Color.fromARGB(255, 0, 0, 0),
                                      fontWeight: FontWeight.w400,
                                      fontSize: 12,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Align(
                    alignment: Alignment.topCenter,
                    child: Container(
                      width: 358,
                      height: 50,
                      child: FlatButton(
                        onPressed: () => this.onFindNearestPressed(context),
                        color: AppColors.primaryElement,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.all(Radius.circular(24)),
                        ),
                        textColor: Color.fromARGB(255, 255, 255, 255),
                        padding: EdgeInsets.all(0),
                        child: Text(
                          "FIND NEAREST CENTER",
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
                ],
              ),
            ),
            Positioned(
              left: 17,
              right: 17,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Container(
                    height: 24,
                    child: Row(
                      children: [
                        Text(
                          "Location Access",
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
                            value: false,
                            inactiveTrackColor: Color.fromARGB(60, 0, 0, 0),
                            onChanged: (value) {},
                            activeColor: AppColors.primaryElement,
                            activeTrackColor: AppColors.primaryElement,
                          ),
                        ),
                      ],
                    ),
                  ),
                  Expanded(
                    flex: 1,
                    child: Container(
                      margin: EdgeInsets.only(top: 9, right: 83),
                      child: Text(
                        "You Need To Enable this option for you to use this feature.",
                        textAlign: TextAlign.left,
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
          ],
        ),
      ),
    );
  }
}
