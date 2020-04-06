import 'package:carousel_slider/carousel_slider.dart';
import 'package:covid_19_app/data/packages.dart';
import 'package:covid_19_app/data/store/Store.dart';
import 'package:covid_19_app/models/statistic.dart';
import 'package:covid_19_app/styles/colors.dart';
import 'package:covid_19_app/widgets/common/statistic_counter.dart';
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
  Store store = Store.instance;
  Statistic nationalStat = Statistic(
      timestamp: DateTime.now().toString(),
      confirmed: 0,
      recovered: 0,
      dead: 0,
      suspected: 0,
      region: 'all');

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
      store.getNationalStats().then((value) {
        setState(() {
          nationalStat = value;
          debugPrint('Stat: ' + value.toMap().toString());
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
        body: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: <Widget>[
                CarouselSlider(
                  height: 200,
                  viewportFraction: 1.0,
                  aspectRatio: 2.0,
                  autoPlay: true,
                  autoPlayInterval: Duration(seconds: 30),
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
                                Expanded(
                                  child: AutoSizeText(
                                    summary1['$i'],
                                    overflow: TextOverflow.ellipsis,
                                    maxLines: 15,
                                    style: Theme.of(context)
                                        .textTheme
                                        .body2
                                        .copyWith(
                                            color: Colors.white, fontSize: 16),
                                  ),
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
                RaisedButton.icon(
                  onPressed: () {
                    Navigator.of(context).pushNamed('/centres');
                  },
                  color: AppColors.primaryElement,
                  shape: BeveledRectangleBorder(
                      borderRadius:
                          BorderRadius.only(bottomRight: Radius.circular(16))),
                  label: Text(
                    'Testing Centres'.toUpperCase(),
                    style: TextStyle(color: AppColors.accentElement),
                  ),
                  icon: Padding(
                    padding: EdgeInsets.all(
                      4.0,
                    ),
                    child: Icon(
                      LineIcons.map_o,
                      color: AppColors.accentElement,
                    ),
                  ),
                ),
                ButtonBar(
                  alignment: MainAxisAlignment.spaceBetween,
                  buttonMinWidth: (MediaQuery.of(context).size.width / 2) - 32,
                  children: <Widget>[
                    RaisedButton.icon(
                      color: AppColors.secondaryText,
                      shape: BeveledRectangleBorder(
                          borderRadius: BorderRadius.only(
                              bottomRight: Radius.circular(16))),
                      onPressed: () {
                        Navigator.of(context).pushNamed('/symptoms');
                      },
                      label: Text(
                        'Symptoms'.toUpperCase(),
                      ),
                      icon: Padding(
                        padding: EdgeInsets.all(
                          4.0,
                        ),
                        child: Icon(LineIcons.info),
                      ),
                    ),
                    RaisedButton.icon(
                      onPressed: () {
                        Navigator.of(context).pushNamed('/preventions');
                      },
                      color: AppColors.secondaryBackground,
                      shape: BeveledRectangleBorder(
                          borderRadius: BorderRadius.only(
                              bottomRight: Radius.circular(16))),
                      icon: Padding(
                        padding: EdgeInsets.all(
                          4.0,
                        ),
                        child: Icon(LineIcons.info),
                      ),
                      label: Text(
                        'Prevention'.toUpperCase(),
                        style: TextStyle(color: AppColors.primaryText),
                      ),
                    ),
                  ],
                ),
                Divider(),
                SizedBox(
                  height: 8,
                ),
                Wrap(
                  direction: Axis.horizontal,
                  alignment: WrapAlignment.spaceBetween,
                  spacing: 100,
                  runSpacing: 10,
                  crossAxisAlignment: WrapCrossAlignment.center,
                  children: <Widget>[
                    Text(
                      'Statistics',
                      style: Theme.of(context).textTheme.headline.copyWith(
                          color: AppColors.primaryElement,
                          fontWeight: FontWeight.w700,
                          fontSize: 16),
                    ),
                    Wrap(
                      crossAxisAlignment: WrapCrossAlignment.center,
                      children: <Widget>[
                        Icon(LineIcons.clock_o),
                        Text(
                          'Updated: ' +
                              timeago.format(
                                  DateTime.parse(nationalStat.timestamp)),
                          style: Theme.of(context).textTheme.overline.copyWith(
                              color: AppColors.secondaryText,
                              fontWeight: FontWeight.w400,
                              fontSize: 12),
                        )
                      ],
                    ), //Updated Time
                  ],
                ), //Stats Heading
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
                            count: nationalStat.confirmed,
                            borderColor: Colors.blue.shade800.value,
                            title: 'Confirmed cases',
                          ),
                          StatisticCounter(
                            width: _wd,
                            count: nationalStat.dead,
                            borderColor: Colors.red.shade900.value,
                            title: 'Confirmed deaths',
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
                            count: nationalStat.recovered,
                            borderColor: Colors.green.shade900.value,
                            title: 'Recovered patients',
                          ),
                          StatisticCounter(
                            width: _wd,
                            count: nationalStat.suspected,
                            borderColor: Colors.orange.shade900.value,
                            title: 'Suspected cases',
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
                SizedBox(
                  height: 18,
                ),
                Container(
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      Text(
                        "Data is provided by:",
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          color: AppColors.secondaryText,
                          fontFamily: "Roboto",
                          fontWeight: FontWeight.w600,
                          fontSize: 12,
                        ),
                      ),
                      SizedBox(
                        width: 5,
                      ),
                      Image.asset(
                        'assets/images/sponsors/liberity.png',
                        height: 50,
                      ),
//                      SvgPicture.asset(
//                        'assets/images/sponsors/NamibiaEmblem-01.svg',
//                        color: AppColors.secondaryText,
//                        height: 70,
//                      ),
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
