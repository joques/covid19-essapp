import 'package:covid_19_app/styles/colors.dart';
import 'package:auto_size_text/auto_size_text.dart';
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
          Container(
            margin: EdgeInsets.all(28),
            child: Column(
              children: <Widget>[
                Container(
                  margin: EdgeInsets.only(bottom: 9),
                  height: 50,
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      Expanded(
                        child: AutoSizeText(
                          "Title that is very long and informative about the topic",
                          maxLines: 2,
                          textAlign: TextAlign.left,
                          style: GoogleFonts.lora(
                            color: AppColors.primaryText,
                            letterSpacing: 2.0,
                            fontWeight: FontWeight.w700,
                            fontSize: 19,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                Container(
                  margin: EdgeInsets.only(bottom: 4),
                  height: 20,
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      Expanded(
                        child: AutoSizeText(
                          "Author Name",
                          maxLines: 1,
                          textAlign: TextAlign.left,
                          style: GoogleFonts.roboto(
                            color: AppColors.secondaryText,
                            fontWeight: FontWeight.w500,
                            fontSize: 14,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                Container(
                  height: 140,
                  decoration: BoxDecoration(
                    color: AppColors.secondaryBackground,
                    borderRadius: BorderRadius.circular(9.0),
                  ),
                  child: Container(), //TODO: Image Goes Here
                ),
                Container(
                  margin: EdgeInsets.only(top: 9.0),
                  height: 100,
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      Expanded(
                        child: AutoSizeText(
                          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip ex ea commodo consequat.",
                          textAlign: TextAlign.left,
                          minFontSize: 14,
                          style: GoogleFonts.roboto(
                            color: AppColors.primaryText,
                            fontWeight: FontWeight.w400,
                            fontSize: 17,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
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
            title: 'Covid-19 cases',
            author: 'Gov Ministry',
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip ex ea commodo consequat.",
          ),
          NewsArticle(
              title: 'Covid-19 war command prepares for virus battle',
              author: 'NGO Name',
              desc:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip ex ea commodo consequat."),
        ],
      ),
    );
  }
}
