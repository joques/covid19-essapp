import 'package:covid_19_app/styles/colors.dart';
import 'package:flutter/material.dart';

class StatisticCounter extends StatefulWidget {
  final double width;
  final int count;
  final String title;
  final int borderColor;
  StatisticCounter(
      {Key key, this.width, this.count, this.title, this.borderColor})
      : super(key: key);
  @override
  _StatisticCounterState createState() =>
      _StatisticCounterState(this.borderColor);
}

class _StatisticCounterState extends State<StatisticCounter> {
  int borderColor;
  _StatisticCounterState(int bdColor) {
    this.borderColor = bdColor;
  }
  @override
  Widget build(BuildContext context) {
    return Container(
      width: widget.width,
      height: 100,
      decoration: BoxDecoration(
          color: AppColors.accentElement,
          borderRadius: BorderRadius.circular(9.0),
          border: Border.all(width: 1.4, color: Color(this.borderColor))),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Container(
            margin: EdgeInsets.only(left: 10, right: 10, top: 10),
            child: Center(
              child: Text(
                //TODO: Resize Text After 100000
                widget.count.toString(),
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: AppColors.primaryText,
                  fontWeight: FontWeight.w900,
                  fontSize: 38,
                ),
              ),
            ),
          ),
          Container(
            margin: EdgeInsets.only(left: 10, right: 10, bottom: 11),
            child: Text(
              widget.title,
              textAlign: TextAlign.center,
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
