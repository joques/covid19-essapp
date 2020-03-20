import 'package:covid_19_app/styles/colors.dart';
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
      width: 168,
      height: 80,
      decoration: BoxDecoration(
        color: AppColors.accentElement,
        borderRadius: BorderRadius.circular(9.0),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            margin: EdgeInsets.only(left: 10, right: 10, top: 10),
            child: Text(
              //TODO: Resize Text After 100000
              widget.count.toString(),
              textAlign: TextAlign.left,
              style: TextStyle(
                color: AppColors.primaryText,
                fontWeight: FontWeight.w700,
                fontSize: 38,
              ),
            ),
          ),
          Spacer(),
          Container(
            margin: EdgeInsets.only(left: 10, right: 10, bottom: 10),
            child: Text(
              widget.title,
              textAlign: TextAlign.left,
              style: TextStyle(
                color: AppColors.secondaryText,
                fontWeight: FontWeight.w700,
                fontSize: 13,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
