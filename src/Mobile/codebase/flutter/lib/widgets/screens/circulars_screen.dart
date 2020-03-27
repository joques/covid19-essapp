import 'package:covid_19_app/styles/colors.dart';
import 'package:covid_19_app/widgets/common/news_article.dart';
import 'package:flutter/material.dart';

class CircularsScreen extends StatefulWidget {
  final String title;
  CircularsScreen({Key key, this.title}) : super(key: key);

  @override
  _CircularsScreenState createState() => _CircularsScreenState();
}

class _CircularsScreenState extends State<CircularsScreen> {
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          Container(
            height: 50,
            margin: EdgeInsets.only(
              left: 25,
              right: 20,
            ),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Container(
                  child: Text(
                    "Most Recent",
                    textAlign: TextAlign.left,
                    style: TextStyle(
                      color: AppColors.primaryText,
                      fontFamily: "Roboto",
                      fontWeight: FontWeight.w700,
                      fontSize: 19,
                    ),
                  ),
                  margin: EdgeInsets.only(bottom: 5, top: 20),
                ),
              ],
            ),
          ), // Latest News
          Divider(),
          NewsArticle(
              title: 'Covid-19 war command prepares for virus battle',
              author: 'NGO Name',
              imageSrc:
                  'https://images.pexels.com/photos/3843955/pexels-photo-3843955.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              desc:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip ex ea commodo consequat."),

          NewsArticle(
              title: 'Covid-19 war command prepares for virus battle',
              author: 'NGO Name',
              imageSrc:
                  'https://images.pexels.com/photos/3843955/pexels-photo-3843955.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              desc:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip ex ea commodo consequat."),
        ],
      ),
    );
  }
}
