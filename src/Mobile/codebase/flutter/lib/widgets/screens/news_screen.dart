import 'package:covid_19_app/styles/colors.dart';
import 'package:flutter/material.dart';

class NewsScreen extends StatefulWidget {
  final String title;
  NewsScreen({Key key, this.title}) : super(key: key);

  @override
  _NewsScreenState createState() => _NewsScreenState();
}

class _NewsScreenState extends State<NewsScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          widget.title,
        ),
        centerTitle: true,
      ),
      body: Center(
        child: Text(widget.title),
      ),
    );
  }
}
