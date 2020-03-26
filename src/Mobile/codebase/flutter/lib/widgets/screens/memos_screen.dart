import 'package:flutter/material.dart';

class MemosScreen extends StatefulWidget {
  final String title;
  MemosScreen({Key key, this.title}) : super(key: key);

  @override
  _MemosScreenState createState() => _MemosScreenState();
}

class _MemosScreenState extends State<MemosScreen> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        //TODO: Design UI
        Container(
          child: Text('Memos'),
        ),
      ],
    );
  }
}
