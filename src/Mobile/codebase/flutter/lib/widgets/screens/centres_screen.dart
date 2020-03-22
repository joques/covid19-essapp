import 'package:flutter/material.dart';

class CentresScreen extends StatefulWidget {
  final String title;
  CentresScreen({Key key, this.title}) : super(key: key);

  @override
  _CentresScreenState createState() => _CentresScreenState();
}

class _CentresScreenState extends State<CentresScreen> {
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