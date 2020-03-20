/*
*  official_circulars_memos_widget.dart
*  covid19-essapp
*
*  Created by UI Team.
*  Copyright © 2018 na.nust. All rights reserved.
    */

import 'package:covid19_essapp/Screens/official_circulars_memos_widget/blog_item_widget.dart';
import 'package:covid19_essapp/values/values.dart';
import 'package:flutter/material.dart';

class OfficialCircularsMemosWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      extendBodyBehindAppBar: true,
      appBar: AppBar(
        title: Text(
          "OFFICIAL CIRCULARS & MEMOS",
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
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Container(
              margin: EdgeInsets.only(left: 18, top: 83, right: 17),
              child: Text(
                "Today",
                textAlign: TextAlign.left,
                style: TextStyle(
                  color: AppColors.primaryText,
                  fontFamily: "Roboto",
                  fontWeight: FontWeight.w700,
                  fontSize: 16,
                ),
              ),
            ),
            Container(
              height: 376,
              margin: EdgeInsets.only(top: 25),
              child: ListView.separated(
                itemCount: 15,
                itemBuilder: (context, index) => BlogItemWidget(),
                separatorBuilder: (context, index) {
                  return Divider(
                    color: Color.fromARGB(255, 225, 225, 225),
                    height: 1,
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
