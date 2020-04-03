import 'package:covid_19_app/data/packages.dart';

//Contains all in app navigation routes
final routes = {
  '/symptoms': (BuildContext context) => SymptomsScreen(title: 'Symptoms'),
  '/preventions': (BuildContext context) =>
      PreventionsScreen(title: 'Preventions'),
  '/sponsors': (BuildContext context) =>
      SponsorsScreen(title: 'Sponsors and Partners'),
  '/centres': (BuildContext context) => CentresScreen(title: 'Testing Centres'),
  '/home': (BuildContext context) => MainPage(),
//  '/feedback': (BuildContext context) => FeedbackScreen(title: 'Feedback'),
//  '/privacy': (BuildContext context) => PrivacyScreen(title: 'Privacy'),
};
