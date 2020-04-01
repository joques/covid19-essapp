import 'package:covid_19_app/styles/colors.dart';
import 'package:url_launcher/url_launcher.dart' as UrlLauncher;
import 'package:flutter_svg/flutter_svg.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class PrevetionsScreen extends StatefulWidget {
  final String title;
  PrevetionsScreen({Key key, this.title}) : super(key: key);

  @override
  _PreventionsScreenState createState() => _PreventionsScreenState();
}

class _PreventionsScreenState extends State<PrevetionsScreen> {
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
        body:ListView(
          children: ListTile.divideTiles(
          context: context,
          tiles: <Widget>[
            //TODO: Add Sliding Counsel
            // SizedBox(
            //   height: 15,
            // ),
            Text(
              "Vaccine and Treament ",
              style: TextStyle(
                color: AppColors.primaryText,
                fontFamily: "Roboto",
                fontWeight: FontWeight.w800,
                fontSize: 22,
              ),textAlign: TextAlign.center,
            ),
            ListTile(
              
              leading: SvgPicture.asset(
                "assets/images/preventIcons/vaccine.svg",
                color: AppColors.primaryElement,
                fit: BoxFit.contain,
              ),
              title: Text(
                "There is currently no vaccine to prevent the Coronavirus disease (COVID-19) and many patients are being treated as per the patient’s clinical conditions.",
                style: TextStyle(
                  color: AppColors.primaryText,
                  fontFamily: "Roboto",
                  fontWeight: FontWeight.w500,
                  fontSize: 18,
                ),
              ),
            ),

            //Divider(),
            Text(
              "Prevention measures ",
              style: TextStyle(
                color: AppColors.primaryText,
                fontFamily: "Roboto",
                fontWeight: FontWeight.w800,
                fontSize: 22,
              ),textAlign: TextAlign.center,
            ),

                ListTile(
                    title: Text(
                      "Social distancing",
                      style: TextStyle(
                        color: AppColors.primaryText,
                        fontFamily: "Roboto",
                        fontWeight: FontWeight.w800,
                        fontSize: 18,
                      ),
                    ),
                    leading: SvgPicture.asset(
                      "assets/images/preventIcons/distancing.svg",
                      color: AppColors.primaryElement,
                      fit: BoxFit.contain,
                    ),
                    subtitle: Text(
                      "Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.",
                      style: TextStyle(
                        color: AppColors.primaryText,
                        fontFamily: "Roboto",
                        fontWeight: FontWeight.w500,
                        fontSize: 18,
                      ),
                    )), // Symptom 1
                ListTile(
                    title: Text(
                      "Clean and disinfect",
                      style: TextStyle(
                        color: AppColors.primaryText,
                        fontFamily: "Roboto",
                        fontWeight: FontWeight.w800,
                        fontSize: 18,
                      ),
                    ),
                    leading: SvgPicture.asset(
                      "assets/images/preventIcons/cleaning.svg",
                      color: AppColors.primaryElement,
                      fit: BoxFit.contain,
                    ),
                    subtitle: Text(
                      "Clean and disinfect frequently touched surfaces daily. This includes tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, and sinks.",
                      style: TextStyle(
                        color: AppColors.primaryText,
                        fontFamily: "Roboto",
                        fontWeight: FontWeight.w500,
                        fontSize: 18,
                      ),
                    )),
                ListTile(
                    title: Text(
                      "Clean your hands often",
                      style: TextStyle(
                        color: AppColors.primaryText,
                        fontFamily: "Roboto",
                        fontWeight: FontWeight.w800,
                        fontSize: 18,
                      ),
                    ),
                    leading: SvgPicture.asset(
                      "assets/images/preventIcons/hygiene.svg",
                      color: AppColors.primaryElement,
                      fit: BoxFit.contain,
                    ),
                    subtitle: Text(
                      "Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing.",
                      style: TextStyle(
                        color: AppColors.primaryText,
                        fontFamily: "Roboto",
                        fontWeight: FontWeight.w500,
                        fontSize: 18,
                      ),
                    )),
                ListTile(
                    title: Text(
                      "Avoid touching eyes, nose and mouth",
                      style: TextStyle(
                        color: AppColors.primaryText,
                        fontFamily: "Roboto",
                        fontWeight: FontWeight.w800,
                        fontSize: 18,
                      ),
                    ),
                    leading: SvgPicture.asset(
                      "assets/images/preventIcons/face.svg",
                      color: AppColors.primaryElement,
                      fit: BoxFit.contain,
                    ),
                    subtitle: Text(
                      "Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick.",
                      style: TextStyle(
                        color: AppColors.primaryText,
                        fontFamily: "Roboto",
                        fontWeight: FontWeight.w500,
                        fontSize: 18,
                      ),
                    )),
              ],
            ).toList(),
            )
        );
  }
}
