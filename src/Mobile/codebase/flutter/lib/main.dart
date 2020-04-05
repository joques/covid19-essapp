import 'package:covid_19_app/data/packages.dart';
import 'package:covid_19_app/data/routes.dart';
import 'package:covid_19_app/widgets/screens/launch_screen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'COVID-19',
      routes: routes,
      theme: ThemeData(
          //primarySwatch: AppColors.primaryElement,
          accentColor: AppColors.accentElement,
          primaryColor: AppColors.primaryElement,
          backgroundColor: AppColors.primaryBackground,
          cardColor: AppColors.accentElement,
          textSelectionColor: AppColors.primaryText),
      home: SplashScreen(),
    );
  }
}
