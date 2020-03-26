import 'package:covid_19_app/styles/colors.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:covid_19_app/widgets/common/featured_article.dart';
import 'package:covid_19_app/widgets/common/news_article.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class NewsScreen extends StatefulWidget {
  final String title;
  NewsScreen({Key key, this.title}) : super(key: key);

  @override
  _NewsScreenState createState() => _NewsScreenState();
}

class _NewsScreenState extends State<NewsScreen> {
  //Dummy Date Now
  String refreshDate = DateTime.now().toUtc().toString();

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          Container(
            height: 25,
            margin: EdgeInsets.only(
              top: 20,
              left: 25,
              right: 20,
            ),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Container(
                  child: Text(
                    "Featured",
                    textAlign: TextAlign.left,
                    style: TextStyle(
                      color: AppColors.primaryText,
                      fontFamily: "Roboto",
                      fontWeight: FontWeight.w700,
                      fontSize: 19,
                    ),
                  ),
                  margin: EdgeInsets.only(bottom: 5),
                ),
              ],
            ),
          ), // TODO: Featured News Widget
          FeaturedArticle(
            author: 'The World Health Organisation',
            title: 'Coronavirus disease (COVID-19) Pandemic',
            desc:
                'The disease causes respiratory illness (like the flu) with symptoms such as a cough, fever, and in more severe cases, difficulty breathing. You can protect yourself by washing your hands frequently, avoiding touching your face, and avoiding close contact (1 meter or 3 feet) with people who are unwell.',
            imageSrc:
                'https://images.pexels.com/photos/415779/pexels-photo-415779.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
          ), // Featured Post With AutoSized Text
          Container(
            height: 25,
            margin: EdgeInsets.only(
              left: 25,
              right: 20,
            ),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Container(
                  child: Text(
                    "Recent News",
                    textAlign: TextAlign.left,
                    style: TextStyle(
                      color: AppColors.primaryText,
                      fontFamily: "Roboto",
                      fontWeight: FontWeight.w700,
                      fontSize: 19,
                    ),
                  ),
                  margin: EdgeInsets.only(bottom: 5),
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
