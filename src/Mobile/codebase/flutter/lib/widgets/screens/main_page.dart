import 'package:covid_19_app/widgets/screens/centres_screen.dart';
import 'package:covid_19_app/widgets/screens/information_screen.dart';
import 'package:covid_19_app/widgets/screens/news_screen.dart';
import 'package:covid_19_app/widgets/screens/statistics_screen.dart';
import 'package:flutter/material.dart';
import 'package:line_icons/line_icons.dart';

class MainPage extends StatefulWidget {
  MainPage({Key key}) : super(key: key);

  @override
  _MainPageState createState() => _MainPageState();
}

class _MainPageState extends State<MainPage> {
  int _currentIndex = 0;

  List<Widget> _screens = [
    InformationScreen(),
    CentresScreen(),
    StatisticsScreen(),
    NewsScreen(),
  ];
  List<BottomNavigationBarItem> _navItems = <BottomNavigationBarItem>[
    BottomNavigationBarItem(
        icon: Icon(LineIcons.home), title: Text('Information')),
    BottomNavigationBarItem(
        icon: Icon(LineIcons.hospital_o), title: Text('Testing Centres')),
    BottomNavigationBarItem(
        icon: Icon(LineIcons.pie_chart), title: Text('Statistics')),
    BottomNavigationBarItem(
        icon: Icon(LineIcons.info_circle), title: Text('News')),
  ];

  _onTapped(index) {
    setState(() {
      _currentIndex = index;
    });
  }

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'Title',
        ),
        centerTitle: true,
      ),
      body: _screens[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        onTap: _onTapped,
        items: _navItems,
        type: BottomNavigationBarType.fixed,
      ),
    );
  }
}
