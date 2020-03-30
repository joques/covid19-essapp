//import 'dart:html';

import 'package:covid_19_app/data/api.dart';
import 'package:covid_19_app/models/memos.dart';
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
    return Scaffold(
        body: FutureBuilder<List<Memo>>(
            //get list of memos from api
            future: API().getMemos(),
            builder: (context, snapshot) {
              //check if response has data
              if (snapshot.hasData) {
                final List<Memo> data = snapshot.data;
                return ListView(
                    children: List.generate(
                        snapshot.data.length,
                        (index) => NewsArticle(
                              title: data[index].title,
                              author: data[index].author,
                              //Todo fix urls for documents
                              source:
                                  'https://www.who.int/docs/default-source/inaugural-who-partners-forum/coronavirus-poster-english-srilanka.pdf?sfvrsn=289dedc3_0',
                              pubdate: data[index].pubdate.toString(),
                              docid: data[index].title,
                            )));
              } else if (snapshot.hasError) {
                return Center(
                  child: Text('Error getting data!'),
                );
              }
              return Center(
                child: CircularProgressIndicator(
                  backgroundColor: AppColors.primaryBackground,
                ),
              );
            }));
  }
}
