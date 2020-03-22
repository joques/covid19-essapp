import 'package:covid_19_app/styles/colors.dart';
import 'package:covid_19_app/data/regions.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:covid_19_app/widgets/common/statistic_counter.dart';
import 'package:flutter/material.dart';

class StatisticsScreen extends StatefulWidget {
  final String title;
  StatisticsScreen({Key key, this.title}) : super(key: key);

  @override
  _StatisticsScreenState createState() => _StatisticsScreenState();
}

class _StatisticsScreenState extends State<StatisticsScreen> {
  //Dummy Data
  String refreshDate = "Thur, 19 March 2020, 7:30 am";

  //Push Notification Consent
  bool consent = false;

  //View By Area Drop Down Value
  var _value;

  //Drop Down Menu List items
  DropdownButton _regionsList() => DropdownButton<String>(
        items: Region.items,
        value: _value,
        isExpanded: true,
        onChanged: (value) {
          setState(() {
            _value = value;
            print(_value);
          });
        },
        hint: Text('Select Region'),
      );

  @override
  Widget build(BuildContext context) {
    double _wd = (MediaQuery.of(context).size.width / 2) - 50;
    return Scaffold(
        appBar: AppBar(
          title: Text(
            widget.title,
          ),
          centerTitle: true,
        ),
        body: SingleChildScrollView(
          child: Column(
            children: <Widget>[
              Container(
                height: 16,
                margin: EdgeInsets.only(
                  left: 20,
                  right: 20,
                  top: 15,
                  bottom: 15,
                ),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Container(
                      child: Text(
                        "Statistics",
                        textAlign: TextAlign.left,
                        style: TextStyle(
                          color: AppColors.primaryText,
                          fontFamily: "Roboto",
                          fontWeight: FontWeight.w700,
                          fontSize: 16,
                        ),
                      ),
                    ),
                    Spacer(),
                    Container(
                      margin: EdgeInsets.only(top: 3),
                      child: Text(
                        "As of $refreshDate",
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          color: AppColors.secondaryText,
                          fontWeight: FontWeight.w400,
                          fontSize: 13,
                        ),
                      ),
                    ),
                  ],
                ),
              ), // Statistics Heading
              Container(
                width: 250,
                height: 250,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Container(
                      width: 206,
                      height: 195,
                      child: Stack(
                        children: [
                          Positioned(
                            left: 0,
                            top: 0,
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Align(
                                  child: Container(
                                    width: 75,
                                    height: 67,
                                    child: SvgPicture.asset(
                                      'assets/images/kuneneRegion.svg',
                                      color: _value
                                                  .toString()
                                                  .contains(allofNamibia) ||
                                              _value.toString().contains(
                                                  kuneneRegion) //TODO: Find a way to iterate the Region list
                                          ? Colors
                                              .redAccent //TODO: Fetch Colour From Region Model
                                          : null,
                                    ),
                                  ),
                                ), //TODO: kuneneRegion
                                Align(
                                  alignment: Alignment.topLeft,
                                  child: Container(
                                    width: 77,
                                    height: 66,
                                    margin:
                                        EdgeInsets.only(left: 46.6, top: 62.6),
                                    child: SvgPicture.asset(
                                      "assets/images/karasRegion.svg",
                                      color: _value
                                                  .toString()
                                                  .contains(allofNamibia) ||
                                              _value
                                                  .toString()
                                                  .contains(karasRegion)
                                          ? Colors.red
                                          : null,
                                      fit: BoxFit.none,
                                    ),
                                  ),
                                ), //TODO: karasRegion
                              ],
                            ),
                          ),
                          Positioned(
                            left: 41,
                            top: 99.3,
                            child: SvgPicture.asset(
                              "assets/images/hardapRegion.svg",
                              color: _value.toString().contains(allofNamibia) ||
                                      _value.toString().contains(hardapRegion)
                                  ? Colors.amber
                                  : null,
                              fit: BoxFit.none,
                            ),
                          ), //TODO: hardapRegion
                          Positioned(
                            left: 60.4,
                            top: 75.5,
                            child: SvgPicture.asset(
                              "assets/images/khomasRegion.svg",
                              color: _value.toString().contains(allofNamibia) ||
                                      _value.toString().contains(khomasRegion)
                                  ? Colors.deepOrange
                                  : null,
                              fit: BoxFit.none,
                            ),
                          ), //TODO: khomasRegion
                          Positioned(
                            left: 29,
                            top: 55.9,
                            child: SvgPicture.asset(
                              "assets/images/erongoRegion.svg",
                              color: _value.toString().contains(allofNamibia) ||
                                      _value.toString().contains(erongoRegion)
                                  ? Colors.pink
                                  : null,
                              fit: BoxFit.none,
                            ),
                          ), //TODO: erongoRegion
                          Positioned(
                            left: 58.6,
                            top: 28.6,
                            child: SvgPicture.asset(
                              "assets/images/otjozondjupaRegion.svg",
                              color: _value.toString().contains(allofNamibia) ||
                                      _value
                                          .toString()
                                          .contains(otjozondjupaRegion)
                                  ? Colors.orange
                                  : null,
                              fit: BoxFit.none,
                            ),
                          ), //TODO: otjozondjupaRegion
                          Positioned(
                            left: 36.5,
                            top: 7,
                            right: 63,
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.stretch,
                              children: [
                                Container(
                                  height: 32,
                                  child: Row(
                                    crossAxisAlignment:
                                        CrossAxisAlignment.center,
                                    children: [
                                      Align(
                                        alignment: Alignment.topLeft,
                                        child: Container(
                                          width: 23,
                                          height: 32,
                                          child: SvgPicture.asset(
                                            "assets/images/omusatiRegion.svg",
                                            color: _value.toString().contains(
                                                        allofNamibia) ||
                                                    _value
                                                        .toString()
                                                        .contains(omusatiRegion)
                                                ? Colors.blueGrey
                                                : null,
                                            fit: BoxFit.none,
                                          ),
                                        ),
                                      ), //TODO: omusatiRegion
                                      Spacer(),
                                      Align(
                                        alignment: Alignment.topLeft,
                                        child: Container(
                                          width: 50,
                                          height: 28,
                                          margin: EdgeInsets.only(right: 1.5),
                                          child: SvgPicture.asset(
                                            "assets/images/kavangoRegion.svg",
                                            color: _value.toString().contains(
                                                        allofNamibia) ||
                                                    _value
                                                        .toString()
                                                        .contains(kavango)
                                                ? Colors.indigo
                                                : null,
                                            fit: BoxFit.none,
                                          ),
                                        ),
                                      ), //TODO: kavangoRegion
                                    ],
                                  ),
                                ),
                                Align(
                                  alignment: Alignment.topRight,
                                  child: Container(
                                    width: 45,
                                    height: 58,
                                    margin:
                                        EdgeInsets.only(top: 13.3, right: 4.2),
                                    child: SvgPicture.asset(
                                      "assets/images/omahekeRegion.svg",
                                      color: _value
                                                  .toString()
                                                  .contains(allofNamibia) ||
                                              _value
                                                  .toString()
                                                  .contains(omahekeRegion)
                                          ? Colors.yellow
                                          : null,
                                      fit: BoxFit.none,
                                    ),
                                  ),
                                ), //TODO: omahekeRegion
                              ],
                            ),
                          ),
                          Positioned(
                            left: 54,
                            top: 11.8,
                            child: SvgPicture.asset(
                              "assets/images/oshanaRegion.svg",
                              color: _value.toString().contains(allofNamibia) ||
                                      _value.toString().contains(oshanaRegion)
                                  ? Colors.teal
                                  : null,
                              fit: BoxFit.none,
                            ),
                          ), // TODO: oshanaRegion
                          Positioned(
                            left: 58.7,
                            top: 7,
                            child: SvgPicture.asset(
                              "assets/images/ohangwenaRegion.svg",
                              color: _value.toString().contains(allofNamibia) ||
                                      _value
                                          .toString()
                                          .contains(ohangwenaRegion)
                                  ? Colors.lime
                                  : null,
                              fit: BoxFit.none,
                            ),
                          ), //TODO: ohangwenaRegion
                          Positioned(
                            left: 62.4,
                            top: 7.6,
                            right: 0,
                            child: Row(
                              children: [
                                Align(
                                  alignment: Alignment.topLeft,
                                  child: Container(
                                    width: 35,
                                    height: 29,
                                    margin: EdgeInsets.only(top: 4),
                                    child: SvgPicture.asset(
                                      'assets/images/oshikotoRegion.svg',
                                      color: _value
                                                  .toString()
                                                  .contains(allofNamibia) ||
                                              _value
                                                  .toString()
                                                  .contains(oshikotoRegion)
                                          ? Colors.green
                                          : null,
                                    ),
                                  ),
                                ), //TODO: oshikotoRegion
                                Spacer(),
                                Align(
                                  alignment: Alignment.topLeft,
                                  child: Container(
                                    margin:
                                        EdgeInsets.only(right: 3, bottom: 16),
                                    width: 64,
                                    height: 16,
                                    child: SvgPicture.asset(
                                      'assets/images/zambeziRegion.svg',
                                      color: _value
                                                  .toString()
                                                  .contains(allofNamibia) ||
                                              _value
                                                  .toString()
                                                  .contains(zambeziRegion)
                                          ? Colors.pinkAccent
                                          : null,
                                    ),
                                  ),
                                ), //TODO: zambeziRegion
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ), // Map
              Container(
                child: Column(
                  children: <Widget>[
                    SizedBox(
                      height: 16,
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: <Widget>[
                        StatisticCounter(
                          width: _wd,
                          count: 0,
                          title: 'Confirmed Cases',
                        ),
                        StatisticCounter(
                          width: _wd,
                          count: 0,
                          title: 'Confirmed Deaths',
                        ),
                      ],
                    ),
                    SizedBox(
                      height: 16,
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: <Widget>[
                        StatisticCounter(
                          width: _wd,
                          count: 0,
                          title: 'Recoverd Patients',
                        ),
                        StatisticCounter(
                          width: _wd,
                          count: 19,
                          title: 'Suspected Cases',
                        ),
                      ],
                    ),
                  ],
                ),
              ), // Statistics Data
              Container(
                height: 16,
                margin: EdgeInsets.only(
                  left: 20,
                  right: 20,
                  top: 30,
                ),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Align(
                      alignment: Alignment.topLeft,
                      child: Container(
                        child: Text(
                          "View By Area",
                          textAlign: TextAlign.left,
                          style: TextStyle(
                            color: AppColors.primaryText,
                            fontWeight: FontWeight.w700,
                            fontSize: 14,
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ), // View By Area Heading
              Container(
                  height: 50,
                  margin: EdgeInsets.only(
                    left: 20,
                    right: 20,
                    top: 15,
                    bottom: 15,
                  ),
                  decoration: BoxDecoration(
                    color: AppColors.accentElement,
                    borderRadius: BorderRadius.circular(9.0),
                  ),
                  child: Container(
                      margin: EdgeInsets.only(
                        left: 15,
                        right: 15,
                      ),
                      decoration: BoxDecoration(
                        color: AppColors.accentElement,
                      ),
                      child: _regionsList())), // Drop Down Menu
              Divider(),
              Container(
                height: 70,
                margin: EdgeInsets.only(
                  left: 20,
                  right: 20,
                  top: 15,
                  bottom: 15,
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Container(
                      height: 40,
                      child: Row(
                        children: [
                          Text(
                            "Push Notifications",
                            textAlign: TextAlign.left,
                            style: TextStyle(
                              color: AppColors.primaryText,
                              fontWeight: FontWeight.w700,
                              fontSize: 16,
                            ),
                          ),
                          Spacer(),
                          Container(
                            width: 52,
                            height: 45,
                            child: Switch(
                              value: consent,
                              inactiveTrackColor: Color.fromARGB(60, 0, 0, 0),
                              onChanged: (value) {
                                setState(() {
                                  consent = value;
                                  print(consent);
                                });
                              },
                              activeColor: AppColors.primaryElement,
                              activeTrackColor: AppColors.primaryElement,
                            ),
                          ),
                        ],
                      ),
                    ),
                    Spacer(),
                    Container(
                      margin: EdgeInsets.only(right: 66),
                      child: Text(
                        "By Enabling this option you will receive the latest notifications as they happen.",
                        textAlign: TextAlign.left,
                        style: TextStyle(
                          color: AppColors.secondaryText,
                          fontSize: 13,
                        ),
                      ),
                    ),
                  ],
                ),
              ), // Push Notifications Consent
            ],
          ),
        ));
  }
}
