import 'package:covid_19_app/data/packages.dart';
import 'package:url_launcher/url_launcher.dart' as UrlLauncher;

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
    return Timer(Duration(seconds: 10), onDoneLoading);
  }

  onDoneLoading() async {
    Navigator.of(context)
        .pushReplacement(MaterialPageRoute(builder: (context) => MainPage()));
  }

  @override
  Widget build(BuildContext context) {
    final String tollFreeNumber = "tel://+264800 100 100";

    return Scaffold(
      backgroundColor: Colors.white,
      body: Center(
        child: Wrap(
          crossAxisAlignment: WrapCrossAlignment.center,
          alignment: WrapAlignment.center,
          runSpacing: 30,
          runAlignment: WrapAlignment.spaceEvenly,
          spacing: 50,
          children: <Widget>[
            Container(
              width: 200,
              child: Image.asset(
                'assets/images/logo.jpeg',
                fit: BoxFit.contain,
              ),
            ),
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
              runSpacing: 50,
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
            ),
            RaisedButton.icon(
              onPressed: () => UrlLauncher.launch(
                  '$tollFreeNumber'), //TODO: import urlLauncher to Make a call
              color: AppColors.primaryElement,
              shape: BeveledRectangleBorder(
                  borderRadius:
                      BorderRadius.only(bottomRight: Radius.circular(16))),
              label: Text(
                'Call Help Line'.toUpperCase(),
                style: TextStyle(color: AppColors.accentElement),
              ),
              icon: Padding(
                padding: EdgeInsets.all(
                  4.0,
                ),
                child: Icon(
                  LineIcons.phone,
                  color: AppColors.accentElement,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
