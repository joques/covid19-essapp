import 'package:covid_19_app/widgets/screens/circulars_screen.dart';
import 'package:covid_19_app/widgets/screens/memos_screen.dart';
import 'package:covid_19_app/widgets/screens/news_screen.dart';
import 'package:flutter/material.dart';

class OfficalCMScreen extends StatefulWidget {
  final String title;
  OfficalCMScreen({Key key, this.title}) : super(key: key);

  @override
  _OfficialCMScreenState createState() => _OfficialCMScreenState();
}

class _OfficialCMScreenState extends State<OfficalCMScreen> {
  //Dummy Date Now
  String refreshDate = DateTime.now().toUtc().toString();

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
        length: 3,
        child: Scaffold(
          appBar: AppBar(
            title: Text(widget.title),
            bottom: TabBar(
              tabs: <Widget>[
                Tab(text: 'News'),
                Tab(text: 'Memos'),
                Tab(text: 'Circulars'),
              ],
            ),
          ),
          body: TabBarView(
            children: [
              NewsScreen(
                title: 'News',
              ),
              MemosScreen(
                title: 'Memos',
              ),
              CircularsScreen(
                title: 'Circulars',
              )
            ],
          ),
        ));
  }
}
