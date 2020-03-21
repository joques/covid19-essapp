import 'package:covid_19_app/styles/colors.dart';
import 'package:flutter/material.dart';

class FAQScreen extends StatefulWidget {
  final String title;
  FAQScreen({Key key, this.title}) : super(key: key);

  @override
  _FAQScreenState createState() => _FAQScreenState();
}

class _FAQScreenState extends State<FAQScreen> {
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
