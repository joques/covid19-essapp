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

class BlogItemWidget extends StatelessWidget {
  void onReadMorePressed(BuildContext context) {}

  @override
  Widget build(BuildContext context) {
    return Container(
      constraints: BoxConstraints.expand(height: 116),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Container(
            height: 99,
            margin: EdgeInsets.only(left: 26, top: 7, right: 26),
            child: Stack(
              alignment: Alignment.topRight,
              children: [
                Positioned(
                  left: 0,
                  top: 0,
                  right: 10,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      Text(
                        "Title",
                        textAlign: TextAlign.left,
                        style: TextStyle(
                          color: AppColors.primaryText,
                          fontFamily: "Roboto",
                          fontWeight: FontWeight.w700,
                          fontSize: 16,
                        ),
                      ),
                      Container(
                        margin: EdgeInsets.only(top: 6),
                        child: Text(
                          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia, non proident, sunt in culpa.",
                          textAlign: TextAlign.left,
                          style: TextStyle(
                            color: AppColors.secondaryText,
                            fontFamily: "Roboto",
                            fontWeight: FontWeight.w400,
                            fontSize: 13,
                          ),
                        ),
                      ),
                      Spacer(),
                      Align(
                        alignment: Alignment.topLeft,
                        child: Text(
                          "By Author Name",
                          textAlign: TextAlign.left,
                          style: TextStyle(
                            color: AppColors.secondaryText,
                            fontFamily: "Roboto",
                            fontWeight: FontWeight.w400,
                            fontSize: 14,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                Positioned(
                  right: 0,
                  bottom: 0,
                  child: FlatButton(
                    onPressed: () => this.onReadMorePressed(context),
                    color: AppColors.primaryElement,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.all(Radius.circular(11.5)),
                    ),
                    textColor: Color.fromARGB(255, 239, 239, 239),
                    padding: EdgeInsets.all(0),
                    child: Text(
                      "Read More",
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        color: AppColors.accentText,
                        fontFamily: "Roboto",
                        fontWeight: FontWeight.w700,
                        fontSize: 9,
                      ),
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
