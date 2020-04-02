import 'package:covid_19_app/data/packages.dart';
import 'package:covid_19_app/styles/colors.dart';
import 'package:url_launcher/url_launcher.dart' as UrlLauncher;
import 'package:flutter_svg/flutter_svg.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:carousel_slider/carousel_slider.dart';

class SymptomsScreen extends StatefulWidget {
  final String title;
  SymptomsScreen({Key key, this.title}) : super(key: key);

  @override
  _SymptomsScreenState createState() => _SymptomsScreenState();
}

class _SymptomsScreenState extends State<SymptomsScreen> {
  //TODO: Verify Symptoms
  static bool symptom1 = false;
  void _symptom1Changed(bool value) => setState(() => symptom1 = value);
  static bool symptom2 = false;
  void _symptom2Changed(bool value) => setState(() => symptom2 = value);
  static bool symptom3 = false;
  void _symptom3Changed(bool value) => setState(() => symptom3 = value);

  var title = {
    '1': 'Common signs of infection include respiratory symptoms:',
    '2': "In more severe cases, infection can cause:",
    '3': "Watch for symptoms",
  };
  var summary1 = {
    '1':
        '- Fever\n- Cough\n- Shortness of breath\n- Breathing difficulties\n- Fatigue',
    '2':
        "- Pneumonia\n- Severe acute respiratory Syndorme (SARS)\n- Kidney failure\n- Death",
    '3':
        "Reported illnesses have ranged from mild symptoms to severe illness and death for confirmed coronavirus disease 2019 (COVID-19) cases. These symptoms may appear 2-14 days after exposure (based on the incubation period of MERS-CoV viruses)."
  };

  //Consent Section
  //TODO: Verify Consent Notice & Toll Free Number
  final String tollFreeNumber = "tel://+264800 100 100";
  String consentText =
      "By Pressing This Button You Are Accepting The Terms of Service And You Have Answered The Questions Truthfuly";

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
        child: Wrap(
          runSpacing: 30,
          crossAxisAlignment: WrapCrossAlignment.center,
          alignment: WrapAlignment.center,
          children: <Widget>[
            CarouselSlider(
              height: 200,
              viewportFraction: 1.0,
              aspectRatio: 2.0,
              autoPlay: true,
              autoPlayInterval: Duration(seconds: 30),
              enlargeCenterPage: false,
              items: [1, 2, 3].map((i) {
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
                            AutoSizeText(
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
            Container(
              padding: EdgeInsets.all(9.0),
              child: Text(
                "Do a self assessment",
                style: TextStyle(
                  color: AppColors.primaryText,
                  fontFamily: "Roboto",
                  fontWeight: FontWeight.w800,
                  fontSize: 22,
                ),
                textAlign: TextAlign.center,
              ),
            ),
            Wrap(
              runSpacing: 25,
              children: <Widget>[
                CheckboxListTile(
                  value: symptom1,
                  onChanged: _symptom1Changed,
                  title: Text(
                    "Do You Have A Dry cough?",
                    style: TextStyle(
                      color: AppColors.primaryText,
                      fontFamily: "Roboto",
                      fontWeight: FontWeight.w500,
                      fontSize: 18,
                    ),
                  ),
                  secondary: SvgPicture.asset(
                    "assets/images/symptomsIcons/mask-wearing.svg",
                    color: AppColors.primaryElement,
                    fit: BoxFit.contain,
                  ),
                  controlAffinity: ListTileControlAffinity.trailing,
                  activeColor: AppColors.primaryElement,
                ), // Symptom 1
                CheckboxListTile(
                  value: symptom2,
                  onChanged: _symptom2Changed,
                  title: Text(
                    "Is Your Temperature 38ºC and Above",
                    style: TextStyle(
                      color: AppColors.primaryText,
                      fontFamily: "2",
                      fontWeight: FontWeight.w500,
                      fontSize: 18,
                    ),
                  ),
                  secondary: SvgPicture.asset(
                    "assets/images/symptomsIcons/headache.svg",
                    color: AppColors.primaryElement,
                    fit: BoxFit.contain,
                  ),
                  controlAffinity: ListTileControlAffinity.trailing,
                  activeColor: AppColors.primaryElement,
                ), // Symptom 2
                CheckboxListTile(
                  value: symptom3,
                  onChanged: _symptom3Changed,
                  title: Text(
                    "Do you have A Difficulty Breathing?",
                    style: TextStyle(
                      color: AppColors.primaryText,
                      fontFamily: "Roboto",
                      fontWeight: FontWeight.w500,
                      fontSize: 18,
                    ),
                  ),
                  secondary: SvgPicture.asset(
                    "assets/images/symptomsIcons/pneumonia-lung.svg",
                    color: AppColors.primaryElement,
                    fit: BoxFit.contain,
                  ),
                  controlAffinity: ListTileControlAffinity.trailing,
                  activeColor: AppColors.primaryElement,
                ), // Symptom 3
              ],
            ),
            SizedBox(
              height: 25,
            ),
            symptom1 &&
                    symptom2 &&
                    symptom3 ==
                        true //if All Three Symptoms are checked show the call button.
                ? Column(
                    children: <Widget>[
                      Container(
                        width: 350,
                        height: 50,
                        child: FlatButton(
                          onPressed: () => UrlLauncher.launch(
                              '$tollFreeNumber'), //TODO: import urlLauncher to Make a call
                          color: AppColors.primaryElement,
                          shape: BeveledRectangleBorder(
                              borderRadius: BorderRadius.only(
                                  bottomRight: Radius.circular(16))),
                          textColor: Color.fromARGB(255, 255, 255, 255),
                          padding: EdgeInsets.all(15),
                          child: Text(
                            "Call Help Line".toUpperCase(),
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              color: Color.fromARGB(255, 255, 255, 255),
                              fontWeight: FontWeight.w700,
                              fontSize: 12,
                            ),
                          ),
                        ),
                      ),
                      SizedBox(
                        height: 10,
                      ),
                      Container(
                        margin: EdgeInsets.only(top: 3, bottom: 3),
                        height: 45,
                        width: 320,
                        child: Text(
                          consentText,
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            color: AppColors.secondaryText,
                            fontWeight: FontWeight.w400,
                            fontSize: 13,
                          ),
                        ),
                      ), //Consent
                    ],
                  )
                : Container(),
          ],
        ),
      ),
    );
  }
}
