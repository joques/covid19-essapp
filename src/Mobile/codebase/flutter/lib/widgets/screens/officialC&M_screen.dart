import 'package:covid_19_app/widgets/common/nav_drawer.dart';
import 'package:covid_19_app/widgets/screens/circulars_and_memos_screen.dart';
import 'package:covid_19_app/widgets/screens/news_screen.dart';
import 'package:flutter/material.dart';

class OfficalCMScreen extends StatefulWidget {
  final String title;
  OfficalCMScreen({Key key, this.title}) : super(key: key);

  @override
  _OfficialCMScreenState createState() => _OfficialCMScreenState();
}

class _OfficialCMScreenState extends State<OfficalCMScreen> {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
        length: 2,
        child: Scaffold(
          appBar: AppBar(
            title: Text(widget.title),
            bottom: TabBar(
              tabs: <Widget>[
                Tab(text: 'News'),
                Tab(text: 'Circulars and Memos'),
              ],
            ),
          ),
          drawer: NavDrawer(),
          body: TabBarView(
            children: [
              NewsScreen(
                title: 'News',
              ),
              CircularsAndMemosScreen(
                title: 'Circulars & Memos',
              )
            ],
          ),
        ));
  }
}
