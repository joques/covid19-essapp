import 'package:covid_19_app/styles/colors.dart';
import 'package:covid_19_app/widgets/common/news_article.dart';
import 'package:flutter/material.dart';

class CircularsAndMemosScreen extends StatefulWidget {
  final String title;
  CircularsAndMemosScreen({Key key, this.title}) : super(key: key);

  @override
  _CircularsAndMemosScreenState createState() =>
      _CircularsAndMemosScreenState();
}

class _CircularsAndMemosScreenState extends State<CircularsAndMemosScreen> {
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
            title: 'What is Coronavirus?',
            author: 'The World Health Organization',
            source:
                'https://www.who.int/docs/default-source/inaugural-who-partners-forum/coronavirus-poster-english-srilanka.pdf?sfvrsn=289dedc3_0',
            pubdate: 'Mar 20, 2020',
            docid: 'Mar 20, 2020',
          ),
          NewsArticle(
            title: 'What is Coronavirus?',
            author: 'The World Health Organization',
            source:
                'https://www.who.int/docs/default-source/inaugural-who-partners-forum/coronavirus-poster-english-srilanka.pdf?sfvrsn=289dedc3_0',
            pubdate: 'Mar 20, 2020',
            docid: 'Mar 20, 2020',
          ),
          NewsArticle(
            title: 'What is Coronavirus?',
            author: 'The World Health Organization',
            source:
                'https://www.who.int/docs/default-source/inaugural-who-partners-forum/coronavirus-poster-english-srilanka.pdf?sfvrsn=289dedc3_0',
            pubdate: 'Mar 20, 2020',
            docid: 'Mar 20, 2020',
          ),
          NewsArticle(
            title: 'What is Coronavirus?',
            author: 'The World Health Organization',
            source:
                'https://www.who.int/docs/default-source/inaugural-who-partners-forum/coronavirus-poster-english-srilanka.pdf?sfvrsn=289dedc3_0',
            pubdate: 'Mar 20, 2020',
            docid: 'Mar 20, 2020',
          ),
          NewsArticle(
            title: 'What is Coronavirus?',
            author: 'The World Health Organization',
            source:
                'https://www.who.int/docs/default-source/inaugural-who-partners-forum/coronavirus-poster-english-srilanka.pdf?sfvrsn=289dedc3_0',
            pubdate: 'Mar 20, 2020',
            docid: 'Mar 20, 2020',
          ),
        ],
      ),
    );
  }
}
