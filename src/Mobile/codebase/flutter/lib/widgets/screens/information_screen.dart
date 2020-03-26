import 'dart:convert';

import 'package:carousel_slider/carousel_slider.dart';
import 'package:covid_19_app/styles/colors.dart';
import 'package:covid_19_app/widgets/common/statistic_counter.dart';
import 'package:covid_19_app/widgets/common/statistical_data.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:intl/intl.dart';

class InformationScreen extends StatefulWidget {
  final String title;

  InformationScreen({Key key, this.title}) : super(key: key);

  @override
  _InformationScreenState createState() => _InformationScreenState();
}

List<Latest> latestStats = new List(0);

class _InformationScreenState extends State<InformationScreen> {
  List _slides = <Widget>[];
  Future<Latest> latestInfo;

  int confirmed;
  @override
  void initState() {
    if (latestStats.length == 0) this.latestInfo = fetchInfo();
    latestInfo.then(
        (value) => {this.confirmed = int.parse(value.confirmed.toString())});
    debugPrint("CONFIRMED=>" + this.confirmed.toString());
    // Additional initialization of the State
    super.initState();
  }

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
  Widget build(BuildContext context) {
    int index = 0;
    double _wd = (MediaQuery.of(context).size.width / 2) - 50;
    return FutureBuilder<dynamic>(
        future: latestInfo, // function where you call your api
        builder: (BuildContext context, AsyncSnapshot<dynamic> snapshot) {
          // AsyncSnapshot<Your object type>
          //latestStats = snapshot.data.List();
          if (snapshot.connectionState == ConnectionState.waiting) {
            return Center(child: Text('LOADING PLEASE WAIT...'));
          } else {
            if (snapshot.hasError)
              return Center(child: Text('Error: ${snapshot.error}'));
            else
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
                        children: <Widget>[
                          CarouselSlider(
                            height: 200,
                            viewportFraction: 1.0,
                            aspectRatio: 2.0,
                            autoPlay: true,
                            enlargeCenterPage: false,
                            items: [1, 2, 3, 4, 5].map((i) {
                              index = i;
                              return Builder(
                                builder: (BuildContext context) {
                                  return Card(
                                    elevation: 5,
                                    shape: RoundedRectangleBorder(
                                        borderRadius:
                                            BorderRadius.circular(15.0)),
                                    child: Padding(
                                      padding: const EdgeInsets.all(16),
                                      child: Column(
                                        mainAxisAlignment:
                                            MainAxisAlignment.start,
                                        crossAxisAlignment:
                                            CrossAxisAlignment.start,
                                        children: <Widget>[
                                          Text(
                                            title['$i'],
                                            style: TextStyle(
                                                fontSize: 20,
                                                fontWeight: FontWeight.w900,
                                                color: AppColors.secondaryText),
                                            textAlign: TextAlign.start,
                                          ),
                                          SizedBox(
                                            height: 10,
                                          ),
                                          Text(
                                            summary1['$i'],
                                            style: Theme.of(context)
                                                .textTheme
                                                .body2
                                                .copyWith(
                                                    color:
                                                        AppColors.primaryText,
                                                    fontSize: 16),
                                          ),
                                          new Expanded(
                                              flex: 1,
                                              child: new SingleChildScrollView(
                                                child: new Text(
                                                  summary1['$i'],
                                                  style: Theme.of(context)
                                                      .textTheme
                                                      .body2
                                                      .copyWith(
                                                          color: AppColors
                                                              .primaryText,
                                                          fontSize: 16),
                                                ),
                                              ))
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
                            buttonMinWidth:
                                (MediaQuery.of(context).size.width / 2) - 32,
                            children: <Widget>[
                              RaisedButton(
                                color: Theme.of(context).primaryColor,
                                shape: BeveledRectangleBorder(
                                    borderRadius: BorderRadius.only(
                                        bottomRight: Radius.circular(16))),
                                onPressed: () {},
                                child: Text('Symptoms'.toUpperCase()),
                              ),
                              RaisedButton(
                                onPressed: () {},
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
                              Text(
                                'As of ' +
                                    DateFormat("EEE, d MMMM yyyy,HH'h'mm")
                                        .format(
                                            DateTime.parse(snapshot.data.date))
                                        .toString(),
                                style: Theme.of(context).textTheme.overline,
                              )
                            ],
                          ),
                          Container(
                            child: Column(
                              children: <Widget>[
                                SizedBox(
                                  height: 16,
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceEvenly,
                                  children: <Widget>[
                                    StatisticCounter(
                                      width: _wd,
                                      count: int.parse(
                                          snapshot.data.confirmed.toString()),
                                      borderColor: Colors.blue.shade800.value,
                                      title: 'Confirmed Cases',
                                    ),
                                    StatisticCounter(
                                      width: _wd,
                                      count: int.parse(
                                          snapshot.data.dead.toString()),
                                      borderColor: Colors.red.shade900.value,
                                      title: 'Confirmed Deaths',
                                    ),
                                  ],
                                ),
                                SizedBox(
                                  height: 16,
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceEvenly,
                                  children: <Widget>[
                                    StatisticCounter(
                                      width: _wd,
                                      count: int.parse(
                                          snapshot.data.recovered.toString()),
                                      borderColor: Colors.green.shade900.value,
                                      title: 'Recoverd Patients',
                                    ),
                                    StatisticCounter(
                                      width: _wd,
                                      count: int.parse(
                                          snapshot.data.suspected.toString()),
                                      borderColor: Colors.orange.shade900.value,
                                      title: 'Suspected Cases',
                                    ),
                                  ],
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  )
                  //})
                  );
          }
        });
  }
}

Future<Latest> fetchInfo() async {
  //http://196.216.167.150:6549/covid/v1/statistics/latest');
  try {
    final response = await http
        .get("http://196.216.167.150:6549/covid/v1/statistics/latest");

    if (response.statusCode == 200) {
      // If the server did return a 200 OK response,
      // then parse the JSON.
      DateTime updated =
          DateTime.parse(Latest.fromJson(json.decode(response.body)).date);
      String formattedDate =
          DateFormat("EEE, d MMMM yyyy,HH'h'mm").format(updated).toString();
      //Thur, 19 March 2020, 7:30am
      debugPrint("Date=>" + formattedDate);
      return Latest.fromJson(json.decode(response.body));
    } else {
      // If the server did not return a 200 OK response,
      // then throw an exception.
      debugPrint("HERE" + response.toString());
      throw Exception('Failed to load latest info');
    }
  } on Exception catch (exception) {
    debugPrint(exception.toString());
    var dataTemp =
        '{"date": "2020-03-23","recovered":10,"dead": 0,"suspected": 56,"confirmed": 3,"worldwide": 45000}';
    return Latest.fromJson(json.decode(dataTemp));
    //return Future.error("This is the error", StackTrace.fromString("This is its trace"));
    //throw ("Unexpected Error occured "); // only executed if error is of type Exception
  } catch (error) {
    throw ("Unexpected Error occured "); // executed for errors of all types other than Exception
  }
}
