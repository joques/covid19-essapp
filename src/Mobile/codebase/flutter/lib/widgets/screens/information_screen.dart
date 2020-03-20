import 'package:flutter/material.dart';

class InformationScreen extends StatefulWidget {
  final String title;
  InformationScreen({Key key, this.title}) : super(key: key);

  @override
  _InformationScreenState createState() => _InformationScreenState();
}

class _InformationScreenState extends State<InformationScreen> {
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
