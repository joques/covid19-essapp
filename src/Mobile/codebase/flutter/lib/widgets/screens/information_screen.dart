import 'package:carousel_slider/carousel_slider.dart';
import 'package:covid_19_app/data/api.dart';
import 'package:covid_19_app/models/statistic.dart';
import 'package:covid_19_app/styles/colors.dart';
import 'package:covid_19_app/widgets/common/nav_drawer.dart';
import 'package:covid_19_app/widgets/common/statistic_counter.dart';
import 'package:covid_19_app/widgets/common/statistical_data.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:timeago/timeago.dart' as timeago;

class InformationScreen extends StatefulWidget {
  final String title;

  InformationScreen({Key key, this.title}) : super(key: key);

  @override
  _InformationScreenState createState() => _InformationScreenState();
}

class _InformationScreenState extends State<InformationScreen> {
  List _slides = <Widget>[];
  Future<Latest> latestInfo;
  int confirmed;
  Statistic latestStat = Statistic(
      confirmed: 0,
      dead: 0,
      suspected: 0,
      recovered: 0,
      timestamp: DateTime.now());

  var title = {
    '1': 'What is COVID-19?',
    '2': "Who is most at risk?",
    '3': "How is it transmited?",
    '4': "How can it be treated or cured?",
    '5': "What are severe complications from this virus? "
  };

  var summary1 = {
    '1':
        'Coronavirus disease 2019 (COVID-19) is a respiratory illness that can spread from person to person. The virus that causes COVID-19 is a novel coronavirus that was first identified during an investigation into an outbreak in Wuhan, China.',
    '2':
        "Currently, travellers to areas where there is ongoing sustained transmission of COVID-19 including Mainland China (all provinces), Hong Kong, Japan, Republic of Korea, Singapore, Vietnam, Taiwan, Italy and the Islamic Republic of Iran are at greatest risk of infection.Furthermore, the elderly, individuals with co-morbidities and healthcare workers have been found to be at a higher risk of death.",
    '3':
        "People can catch COVID-19 from others who have the virus. The disease can spread from person to person through small droplets from the nose or mouth which are spread when a person with COVID-19 coughs or exhales. These droplets land on objects and surfaces around the person. Other people then catch COVID-19 by touching these objects or surfaces, then touching their eyes, nose or mouth. People can also catch COVID-19 if they breathe in droplets from a person with COVID-19 who coughs out or exhales droplets. This is why it is important to stay more than 1 meter (3 feet) away from a person who is sick.",
    '4':
        "There is currently no vaccine nor any specific antiviral treatment against COVID-19. The best way to prevent infection is to take everyday preventive actions, like avoiding close contact with people who are sick and washing your hands often. ",
    '5':
        "Some patients have pneumonia in both lungs, multi-organ failure and in some cases death. "
  };

  @override
  void initState() {
    super.initState();
    fetchLatestStats();
  }

  fetchLatestStats() async {
    try {
      API().getLatestStatistics().then((value) {
        setState(() {
          latestStat = value;
        });
      });
    } catch (err) {
      print(err.toString());
    }
  }

  @override
  Widget build(BuildContext context) {
    double _wd = (MediaQuery.of(context).size.width / 2) - 45;

    return Scaffold(
        appBar: AppBar(
          title: Text(
            widget.title,
          ),
          centerTitle: true,
        ),
        drawer: NavDrawer(),
        body: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              children: <Widget>[
                CarouselSlider(
                  height: 200,
                  viewportFraction: 1.0,
                  aspectRatio: 2.0,
                  autoPlay: true,
                  enlargeCenterPage: false,
                  items: [1, 2, 3, 4, 5].map((i) {
                    return Builder(
                      builder: (BuildContext context) {
                        return Card(
                          color: Theme.of(context).primaryColor,
                          elevation: 5,
                          shape: BeveledRectangleBorder(
                              borderRadius: BorderRadius.only(
                                  bottomRight: Radius.circular(15))),
                          child: Padding(
                            padding: const EdgeInsets.all(16),
                            child: Column(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: <Widget>[
                                Text(
                                  title['$i'],
                                  overflow: TextOverflow.ellipsis,
                                  maxLines: 1,
                                  style: TextStyle(
                                      fontSize: 18,
                                      fontWeight: FontWeight.w900,
                                      color: Colors.white),
                                  textAlign: TextAlign.start,
                                ),
                                SizedBox(
                                  height: 16,
                                ),
                                Text(
                                  summary1['$i'],
                                  overflow: TextOverflow.ellipsis,
                                  maxLines: 5,
                                  style: Theme.of(context)
                                      .textTheme
                                      .body2
                                      .copyWith(
                                          color: Colors.white, fontSize: 16),
                                )
                              ],
                            ),
                          ),
                        );
                      },
                    );
                  }).toList(),
                ),
                SizedBox(
                  height: 16,
                ),
                ButtonBar(
                  alignment: MainAxisAlignment.spaceBetween,
                  buttonMinWidth: (MediaQuery.of(context).size.width / 2) - 32,
                  children: <Widget>[
                    RaisedButton(
                      color: Theme.of(context).primaryColor,
                      shape: BeveledRectangleBorder(
                          borderRadius: BorderRadius.only(
                              bottomRight: Radius.circular(16))),
                      onPressed: () {
                        Navigator.of(context).pushNamed('/symptoms');
                      },
                      child: Text('Symptoms'.toUpperCase()),
                    ),
                    RaisedButton(
                      onPressed: () {
                        Navigator.of(context).pushNamed('/symptoms');
                      },
                      color: AppColors.ternaryBackground,
                      shape: BeveledRectangleBorder(
                          borderRadius: BorderRadius.only(
                              bottomRight: Radius.circular(16))),
                      child: Text(
                        'Prevention'.toUpperCase(),
                        style: TextStyle(color: Colors.white),
                      ),
                    ),
                  ],
                ),
                SizedBox(
                  height: 16,
                ),
                Divider(),
                SizedBox(
                  height: 16,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: <Widget>[
                    Text(
                      'Statistics',
                      style: Theme.of(context).textTheme.headline,
                    ),
                    Row(
                      children: <Widget>[
                        Text('Updated:',
                            style: Theme.of(context)
                                .textTheme
                                .overline
                                .copyWith(
                                    color: AppColors.primaryElement,
                                    fontWeight: FontWeight.w900,
                                    fontSize: 18)),
                        Text(
                          timeago.format(latestStat.timestamp),
                          style: Theme.of(context).textTheme.overline.copyWith(
                              color: AppColors.primaryElement,
                              fontWeight: FontWeight.w900,
                              fontSize: 16),
                        )
                      ],
                    ),
                  ],
                ),
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
                            count: latestStat.confirmed,
                            borderColor: Colors.blue.shade800.value,
                            title: 'Confirmed Cases',
                          ),
                          StatisticCounter(
                            width: _wd,
                            count: latestStat.dead,
                            borderColor: Colors.red.shade900.value,
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
                            count: latestStat.recovered,
                            borderColor: Colors.green.shade900.value,
                            title: 'Recoverd Patients',
                          ),
                          StatisticCounter(
                            width: _wd,
                            count: latestStat.suspected,
                            borderColor: Colors.orange.shade900.value,
                            title: 'Suspected Cases',
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
                SizedBox(
                  height: 15,
                ),
                Container(
                  margin: EdgeInsets.only(top: 7),
                  child: Wrap(
                    children: <Widget>[
                      Text(
                        "Data is provided by: Ministry of Health and Social Services Namibia (MHSS)",
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          color: AppColors.secondaryText,
                          fontFamily: "Roboto",
                          fontWeight: FontWeight.w600,
                          fontSize: 14,
                        ),
                      )
                    ],
                  ),
                ),
//                Container(
//                  margin: EdgeInsets.only(top: 3),
//                  child: Text(
//                    "As of ${timeago.format(_regions[0].statistics.timestamp)}",
//                    textAlign: TextAlign.center,
//                    style: TextStyle(
//                      color: AppColors.secondaryText,
//                      fontWeight: FontWeight.w400,
//                      fontSize: 13,
//                    ),
//                  ),
//                ),
              ],
            ),
          ),
        )
        //})
        );
  }
}
