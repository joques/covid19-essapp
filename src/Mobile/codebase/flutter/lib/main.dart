import 'package:covid_19_app/styles/colors.dart';
import 'package:covid_19_app/widgets/screens/main_page.dart';
import 'package:covid_19_app/widgets/screens/prevention_screen.dart';
import 'package:covid_19_app/widgets/screens/symptoms_screen.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'COVID-19',
      routes: <String, WidgetBuilder>{
        '/symptoms': (BuildContext context) => SymptomsScreen(
              title: 'Symptoms',
            ),
            '/preventions': (BuildContext context) => PrevetionsScreen(
              title: 'Preventions',
            ),
      },
      theme: ThemeData(
          //primarySwatch: AppColors.primaryElement,
          accentColor: AppColors.accentElement,
          primaryColor: AppColors.primaryElement,
          backgroundColor: AppColors.primaryBackground,
          cardColor: AppColors.accentElement,
          textSelectionColor: AppColors.primaryText),
      home: MainPage(),
    );
  }
}
