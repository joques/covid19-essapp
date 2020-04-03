import 'package:covid_19_app/data/packages.dart';

class SplashScreen extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return SplashScreenState();
  }
}

class SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    loadData();
  }

  final spinKit = SpinKitThreeBounce(
    color: AppColors.primaryText,
    size: 25.0,
  );

  Future<Timer> loadData() async {
    return Timer(Duration(seconds: 6), onDoneLoading);
  }

  onDoneLoading() async {
    Navigator.of(context)
        .pushReplacement(MaterialPageRoute(builder: (context) => MainPage()));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Container(
        decoration: BoxDecoration(
          image: DecorationImage(
              image: AssetImage('assets/images/logo.jpeg'),
              fit: BoxFit.contain),
        ),
        child: Padding(
          padding: EdgeInsets.all(
            50.0,
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.end,
            children: <Widget>[
              Wrap(
                crossAxisAlignment: WrapCrossAlignment.center,
                alignment: WrapAlignment.center,
                runSpacing: 30,
                spacing: 50,
                children: <Widget>[
                  spinKit,
                  Text(
                    "Proudly brought to you by:",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: AppColors.primaryText,
                      fontFamily: "Roboto",
                      fontWeight: FontWeight.w800,
                      fontSize: 13,
                    ),
                  ),
                  Wrap(
                    crossAxisAlignment: WrapCrossAlignment.center,
                    alignment: WrapAlignment.spaceBetween,
                    spacing: 35,
                    children: <Widget>[
                      Image.asset(
                        'assets/images/sponsors/NUSTCoBrandLogo.png',
                        height: 45,
                      ),
                      Image.asset(
                        'assets/images/sponsors/liberity.png',
                        height: 70,
                      ),
                    ],
                  )
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}
