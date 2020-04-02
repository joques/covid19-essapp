import 'package:covid_19_app/data/packages.dart';
import 'package:covid_19_app/styles/colors.dart';
import 'package:url_launcher/url_launcher.dart' as UrlLauncher;
import 'package:flutter_svg/flutter_svg.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class SponsorsScreen extends StatefulWidget {
  final String title;
  SponsorsScreen({Key key, this.title}) : super(key: key);

  @override
  _SponsorsScreenState createState() => _SponsorsScreenState();
}

class _SponsorsScreenState extends State<SponsorsScreen> {
  @override
  Widget build(BuildContext context) {
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
//                Container(
//                  padding: EdgeInsets.all(9.0),
//                  margin: EdgeInsets.all(10.0),
//                  child: ListTile(
//                      isThreeLine: true,
//                      title: Text(
//                        "Overview",
//                        style: TextStyle(
//                          color: AppColors.primaryText,
//                          fontFamily: "Roboto",
//                          fontWeight: FontWeight.w800,
//                          fontSize: 22,
//                        ),
//                        textAlign: TextAlign.center,
//                      ),
//                      subtitle: Text(
//                        "The COVID-19 Essential Application aims to provide awareness information, safety tips and new developments about the COVID-19 virus in Namibia, the SADEC region and worldwide. The application is part of the efforts under the virtual hackathon taking place during the lock-down period. The application exists in two formats: a web application and a mobile application (running on both Android and iOS).",
//                        style: TextStyle(
//                          color: AppColors.secondaryText,
//                          fontFamily: "Roboto",
//                          fontWeight: FontWeight.w400,
//                          fontSize: 16,
//                        ),
//                      )),
//                ),
//                Divider(),

                Container(
                  padding: EdgeInsets.all(9.0),
                  margin: EdgeInsets.all(10.0),
                  child: Image.asset(
                    'assets/images/sponsors/NUSTLogo.png',
                    height: 50,
                  ),
                ),
                ListTile(
                    isThreeLine: true,
                    title: Container(
                      child: Text(
                        "Namibia University of Science and Technology",
                        style: TextStyle(
                          color: AppColors.primaryText,
                          fontFamily: "Roboto",
                          fontWeight: FontWeight.w800,
                          fontSize: 18,
                        ),
                        textAlign: TextAlign.center,
                      ),
                      margin: EdgeInsets.all(10.0),
                    ),
                    subtitle: Text(
                      'The Faculty of Computing and Informatics offers different specialisations and different exit levels. Our offering includes Bachelor, Bachelor Honours, Master and PhD degrees in various specialisations in Computer Science and Informatics.',
                      style: TextStyle(
                        color: AppColors.secondaryText,
                        fontFamily: "Roboto",
                        fontWeight: FontWeight.w400,
                        fontSize: 16,
                      ),
                    )),
                SizedBox(
                  height: 25,
                ),
                Container(
                  padding: EdgeInsets.all(9.0),
                  margin: EdgeInsets.all(10.0),
                  child: Image.asset(
                    'assets/images/sponsors/liberity.png',
                    height: 100,
                  ),
                ),
                ListTile(
                    isThreeLine: true,
                    title: Container(
                      child: Text(
                        "Ministry of Health and Social Services, MOHSS - Namibia",
                        style: TextStyle(
                          color: AppColors.primaryText,
                          fontFamily: "Roboto",
                          fontWeight: FontWeight.w800,
                          fontSize: 18,
                        ),
                        textAlign: TextAlign.center,
                      ),
                      margin: EdgeInsets.all(10.0),
                    ),
                    subtitle: Text(
                      'The mandate of the MOHSS is derived from the Namibian Constitution Article 95 where the state is required to maintain the welfare of the people by putting in place legislation that seek to provide health care of the people and also to ensure social welfare for the people including the weak and vulnerable members of the society.',
                      style: TextStyle(
                        color: AppColors.secondaryText,
                        fontFamily: "Roboto",
                        fontWeight: FontWeight.w400,
                        fontSize: 16,
                      ),
                    )),
                SizedBox(
                  height: 25,
                ),
                // Image.asset(
                //   'assets/images/sponsors/UNDP Logo 2020.jpg',
                //   height: 120,
                // ),
                // ListTile(
                //     isThreeLine: true,
                //     title: Container(
                //       child: Text(
                //         "UNDP Namibia",
                //         style: TextStyle(
                //           color: AppColors.primaryText,
                //           fontFamily: "Roboto",
                //           fontWeight: FontWeight.w800,
                //           fontSize: 18,
                //         ),
                //         textAlign: TextAlign.center,
                //       ),
                //       margin: EdgeInsets.all(10.0),
                //     ),
                //     subtitle: Text(
                //       "UNDP is the UN’s global development network, advocating for change and connecting countries to knowledge, experience and resources to help people build a better life. We are on the ground in 177 countries, working with them on their own solutions to global and national development challenges.",
                //       style: TextStyle(
                //         color: AppColors.secondaryText,
                //         fontFamily: "Roboto",
                //         fontWeight: FontWeight.w400,
                //         fontSize: 16,
                //       ),
                //     )),
              ],
            ),
          ),
        ));
  }
}
