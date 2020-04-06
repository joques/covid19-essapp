import 'package:covid_19_app/data/packages.dart';
import 'package:covid_19_app/data/store/Store.dart';
import 'package:url_launcher/url_launcher.dart' as UrlLauncher;

class SplashScreen extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return SplashScreenState();
  }
}

class SplashScreenState extends State<SplashScreen> {
  Store store = Store.instance;
  API api = API();

  Map<Future, bool> tasks = Map();

  @override
  void initState() {
    super.initState();
    tasks[api.getFaqs()] = false;
    tasks[api.getAggregateStatistics()] = false;
    tasks[api.getCentres()] = false;

    loadData();
  }

  final spinKit = SpinKitThreeBounce(
    color: AppColors.primaryText,
    size: 25.0,
  );

  Future<Timer> loadData() async {
    tasks.forEach((task, value) {
      task.whenComplete(() => setState(() {
            tasks[task] = true;
            debugPrint(tasks.values.toString());
            if (!tasks.containsValue(false)) {
              debugPrint('All complete');
              return onDoneLoading();
            }
          }));
    });
  }

  onDoneLoading() {
    Navigator.of(context)
        .pushReplacement(MaterialPageRoute(builder: (context) => MainPage()));
  }

  @override
  Widget build(BuildContext context) {
    final String tollFreeNumber = "tel://+264800 100 100";

    return Scaffold(
      backgroundColor: Colors.white,
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Center(
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
                  SvgPicture.asset(
                    'assets/images/sponsors/NUST&MOHSS.svg',
                    height: 62,
                  ),
                  // Image.asset(
                  //   'assets/images/sponsors/NUSTCoBrandLogo.png',
                  //   height: 45,
                  // ),
                  // Image.asset(
                  //   'assets/images/sponsors/liberity.png',
                  //   height: 70,
                  // ),
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
      ),
    );
  }
}
