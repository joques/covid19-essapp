import 'package:covid_19_app/styles/colors.dart';
import 'package:url_launcher/url_launcher.dart' as UrlLauncher;
import 'package:flutter_svg/flutter_svg.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

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
            Divider(),
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
