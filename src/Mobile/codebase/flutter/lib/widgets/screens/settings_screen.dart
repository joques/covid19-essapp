import 'package:covid_19_app/data/packages.dart';

class SettingsScreen extends StatefulWidget {
  final String title;
  SettingsScreen({Key key, this.title}) : super(key: key);

  @override
  _SettingsScreenState createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen> {
  //Push Notification Consent
  bool consent = false;
  bool location = false;

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
          crossAxisAlignment: WrapCrossAlignment.start,
          children: ListTile.divideTiles(
            context: context,
            tiles: <Widget>[
              Container(
                padding: EdgeInsets.all(9.0),
                child: Text(
                  "General",
                  style: TextStyle(
                    color: AppColors.primaryText,
                    fontFamily: "Roboto",
                    fontWeight: FontWeight.w800,
                    fontSize: 22,
                  ),
                  textAlign: TextAlign.center,
                ),
              ), //Heading
              ListTile(
                leading: Icon(LineIcons.user),
                trailing: Icon(Icons.arrow_forward_ios),
                subtitle: Text(
                  "Coming Soon",
                  textAlign: TextAlign.left,
                  style: TextStyle(
                    color: AppColors.secondaryText,
                    fontSize: 13,
                  ),
                ),
                title: Text(
                  'Profile',
                  style: TextStyle(
                    color: AppColors.secondaryText,
                    fontFamily: "Roboto",
                    fontWeight: FontWeight.w400,
                    fontSize: 16,
                  ),
                ),
                onTap: () => Navigator.of(context).pushNamed('/profile'),
              ), //TODO: Profile Feature
              ListTile(
                leading: Icon(LineIcons.comment),
                trailing: Icon(Icons.arrow_forward_ios),
                subtitle: Text(
                  "Coming Soon",
                  textAlign: TextAlign.left,
                  style: TextStyle(
                    color: AppColors.secondaryText,
                    fontSize: 13,
                  ),
                ),
                title: Text(
                  'Feedback',
                  style: TextStyle(
                    color: AppColors.secondaryText,
                    fontFamily: "Roboto",
                    fontWeight: FontWeight.w400,
                    fontSize: 16,
                  ),
                ),
                onTap: () => Navigator.of(context).pushNamed('/feedback'),
              ), //TODO: Feedback Feature
              ListTile(
                leading: Icon(LineIcons.group),
                trailing: Icon(Icons.arrow_forward_ios),
//                subtitle: Text("Coming Soon",
//                    textAlign: TextAlign.left,
//                    style: TextStyle(
//                      color: AppColors.secondaryText,
//                      fontSize: 13,
//                    )),
                title: Text(
                  'Sponsors',
                  style: TextStyle(
                    color: AppColors.primaryText,
                    fontFamily: "Roboto",
                    fontWeight: FontWeight.w400,
                    fontSize: 18,
                  ),
                ),
                onTap: () => Navigator.of(context).pushNamed('/sponsors'),
              ),
//              Container(
//                padding: EdgeInsets.all(9.0),
//                child: Text(
//                  "Privacy",
//                  style: TextStyle(
//                    color: AppColors.primaryText,
//                    fontFamily: "Roboto",
//                    fontWeight: FontWeight.w800,
//                    fontSize: 22,
//                  ),
//                  textAlign: TextAlign.center,
//                ),
//              ),
            ],
          ).toList(),
        ),
      ),
    );
  }
}
