//import 'dart:html';

import 'package:covid_19_app/data/store/Store.dart';
import 'package:covid_19_app/models/memos.dart';
import 'package:covid_19_app/widgets/common/loading_faq.dart';
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
  Store store = Store.instance;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        //backgroundColor: AppColors.primaryElement,
        body: FutureBuilder<List<Memo>>(
            //get list of memos from api
            future: store.getMemos(),
            builder: (context, snapshot) {
              //check if response has data
              if (snapshot.hasData) {
                final List<Memo> data = snapshot.data;
                return ListView(
                    children: List.generate(
                        snapshot.data.length,
                        (index) => Padding(
                              padding: const EdgeInsets.symmetric(
                                  horizontal: 8, vertical: 4),
                              child: NewsArticle(
                                title: data[index].title,
                                author: data[index].author,
                                //Todo fix urls for documents
                                source: data[index].docurl,
                                pubdate: data[index].pubdate.toString(),
                                docid: data[index].title,
                              ),
                            )));
              } else if (snapshot.hasError) {
                return LoadingFaq();
//                  Center(
//                  child: Text('Error getting data!'),
//                );
              }
              return LoadingFaq();
//              Center(
//                child: CircularProgressIndicator(
//                  backgroundColor: AppColors.primaryBackground,
//                ),
//              );
            }));
  }
}
