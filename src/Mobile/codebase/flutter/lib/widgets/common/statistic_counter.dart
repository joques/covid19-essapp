import 'package:covid_19_app/data/packages.dart';
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
      decoration:  BoxDecoration(
        color: AppColors.accentElement,
        borderRadius: BorderRadius.circular(9.0),
        border: Border.all(
          width: 1.4,
          color: Color(this.borderColor),
        ),
      )
      ,
      child: Container(
        margin: EdgeInsets.all(5.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            SizedBox(
              height: 15,
            ),
            Expanded(
                child: AutoSizeText(
              //TODO: Resize Text After 100000
              widget.count.toString(),
              textAlign: TextAlign.center,
              maxLines: 1,
              style: TextStyle(
                color: AppColors.primaryText,
                fontWeight: FontWeight.w900,
                fontSize: 36,
              ),
            )),
            Expanded(
              child: AutoSizeText(
                widget.title,
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: AppColors.secondaryText,
                  fontWeight: FontWeight.w700,
                  fontSize: 12,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
