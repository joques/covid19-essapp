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
    return Column(
      children: <Widget>[
        //TODO: Design UI
        Container(
          child: Text('Circulars'),
        ),
      ],
    );
  }
}
