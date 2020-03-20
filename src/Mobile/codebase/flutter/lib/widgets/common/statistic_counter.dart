import 'package:flutter/material.dart';

class StatisticCounter extends StatefulWidget {
  final double width;
  final int count;
  final String title;
  StatisticCounter({Key key, this.width, this.count, this.title})
      : super(key: key);

  @override
  _StatisticCounterState createState() => _StatisticCounterState();
}

class _StatisticCounterState extends State<StatisticCounter> {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: widget.width,
      child: Column(
        children: <Widget>[
          Center(
            child: Text(
              widget.count.toString(),
              style: TextStyle(fontWeight: FontWeight.w900, fontSize: 40),
            ),
          ),
          Text(
            widget.title,
            style: Theme.of(context).textTheme.headline6,
            textAlign: TextAlign.center,
          )
        ],
      ),
    );
  }
}
