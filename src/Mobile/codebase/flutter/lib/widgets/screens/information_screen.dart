import 'package:carousel_slider/carousel_slider.dart';
import 'package:covid_19_app/styles/colors.dart';
import 'package:flutter/material.dart';

class InformationScreen extends StatefulWidget {
  final String title;

  InformationScreen({Key key, this.title}) : super(key: key);

  @override
  _InformationScreenState createState() => _InformationScreenState();
}

class _InformationScreenState extends State<InformationScreen> {
  List _slides = <Widget>[];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: AppColors.primaryElement,
          title: Text(
            widget.title,
          ),
          centerTitle: true,
        ),
        body: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Column(
              children: <Widget>[
                CarouselSlider(
                  height: 200.0,
                  viewportFraction: 1.0,
                  aspectRatio: 2.0,
                  autoPlay: true,
                  enlargeCenterPage: false,
                  items: [1, 2, 3, 4, 5].map((i) {
                    return Builder(
                      builder: (BuildContext context) {
                        return Card(
                          color: Theme.of(context).accentColor,
                          child: Padding(
                            padding: const EdgeInsets.all(16),
                            child: Column(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: <Widget>[
                                Text(
                                  'Whats Corona Virus?',
                                  style: TextStyle(
                                      fontSize: 20,
                                      fontWeight: FontWeight.w900),
                                  textAlign: TextAlign.start,
                                ),
                                SizedBox(
                                  height: 16,
                                ),
                                Text(
                                  'Some text here Some text hereSome text hereSome text hereSome text hereSome text hereSome text hereSome text hereSome text here',
                                  style: Theme.of(context)
                                      .textTheme
                                      .body2
                                      .copyWith(color: Colors.white),
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
                      onPressed: () {},
                      child: Text('Symptoms'.toUpperCase()),
                    ),
                    RaisedButton(
                      onPressed: () {},
                      color: Theme.of(context).accentColor,
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
                      'As of Thur, 19 March 2020, 7:30am',
                      style: Theme.of(context).textTheme.overline,
                    )
                  ],
                )
              ],
            ),
          ),
        ));
  }
}
