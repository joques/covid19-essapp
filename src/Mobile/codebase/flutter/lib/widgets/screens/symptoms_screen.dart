import 'package:covid_19_app/styles/colors.dart';
import 'package:flutter/material.dart';

class SymptomsScreen extends StatefulWidget {
  final String title;
  SymptomsScreen({Key key, this.title}) : super(key: key);

  @override
  _SymptomsScreenState createState() => _SymptomsScreenState();
}

class _SymptomsScreenState extends State<SymptomsScreen> {
  bool consent1 = false;
  void _consent1Changed(bool value) => setState(() => consent1 = value);

  bool consent2 = false;
  void _consent2Changed(bool value) => setState(() => consent2 = value);

  bool consent3 = false;
  void _consent3Changed(bool value) => setState(() => consent3 = value);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          widget.title,
        ),
        centerTitle: true,
      ),
      body: Column(
        children: <Widget>[
          Divider(),
          Container(
            height: 290,
            margin: EdgeInsets.only(
              left: 10,
              right: 10,
              top: 10,
              bottom: 10,
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                CheckboxListTile(
                  value: consent1,
                  onChanged: _consent1Changed,
                  title: Text(
                    'Do you have A Difficulty Breathing?',
                    style: TextStyle(
                      color: AppColors.primaryText,
                      fontFamily: "Roboto",
                      fontWeight: FontWeight.w400,
                      fontSize: 18,
                    ),
                  ),
                  controlAffinity: ListTileControlAffinity.trailing,
                  subtitle: new Text('Subtitle'),
                  activeColor: AppColors.primaryElement,
                ),
                CheckboxListTile(
                  value: consent2,
                  onChanged: _consent2Changed,
                  title: Text(
                    'Do you have A Difficulty Breathing?',
                    style: TextStyle(
                      color: AppColors.primaryText,
                      fontFamily: "Roboto",
                      fontWeight: FontWeight.w400,
                      fontSize: 18,
                    ),
                  ),
                  controlAffinity: ListTileControlAffinity.trailing,
                  subtitle: new Text('Subtitle'),
                  activeColor: AppColors.primaryElement,
                ),
                CheckboxListTile(
                  value: consent3,
                  onChanged: _consent3Changed,
                  title: Text(
                    'Do you have A Difficulty Breathing?',
                    style: TextStyle(
                      color: AppColors.primaryText,
                      fontFamily: "Roboto",
                      fontWeight: FontWeight.w400,
                      fontSize: 18,
                    ),
                  ),
                  controlAffinity: ListTileControlAffinity.trailing,
                  subtitle: new Text('Subtitle'),
                  activeColor: AppColors.primaryElement,
                ),
                consent1 && consent2 && consent3 == true
                    ? FlatButton(
                        onPressed: () {},
                        color: AppColors.primaryElement,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.all(Radius.circular(24)),
                        ),
                        textColor: Color.fromARGB(255, 255, 255, 255),
                        padding: EdgeInsets.all(15),
                        child: Text(
                          "Call: 0800 100 100",
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            color: Color.fromARGB(255, 255, 255, 255),
                            fontWeight: FontWeight.w700,
                            fontSize: 12,
                          ),
                        ),
                      )
                    : Container(),
              ],
            ),
          ), // Symptom Consent
        ],
      ),
    );
  }
}
