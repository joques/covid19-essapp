/*
*  blog_item_widget.dart
*  covid19-essapp
*
*  Created by UI Team.
*  Copyright © 2018 na.nust. All rights reserved.
    */

import 'package:covid19_essapp/Widgets/post_widget/post_widget.dart';
import 'package:covid19_essapp/values/values.dart';
import 'package:flutter/material.dart';

class VirusInfoWidget extends StatelessWidget {
  final String title;
  final String image;
  final String shortDesc;

  const VirusInfoWidget({
    Key key,
    this.title,
    this.image,
    this.shortDesc,
  }) : super(key: key);

  void onReadMorePressed(BuildContext context) {}

  @override
  Widget build(BuildContext context) {
    return Container(
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
            top: 20,
            right: 88,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Text(
                  title,
                  textAlign: TextAlign.left,
                  style: TextStyle(
                    color: AppColors.primaryText,
                    fontFamily: "Arial",
                    fontWeight: FontWeight.w700,
                    fontSize: 22,
                  ),
                ),
                Container(
                  margin: EdgeInsets.only(right: 21, top: 10),
                  child: Text(
                    shortDesc,
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
    );
  }
}
