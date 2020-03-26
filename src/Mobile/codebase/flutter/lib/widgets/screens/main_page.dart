import 'package:covid_19_app/widgets/screens/centres_screen.dart';
import 'package:covid_19_app/widgets/screens/faq_screen.dart';
import 'package:covid_19_app/widgets/screens/information_screen.dart';
import 'package:covid_19_app/widgets/screens/officialC&M_screen.dart';
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
    InformationScreen(
      title: 'General Information',
    ),
    CentresScreen(
      title: 'Testing Centres',
    ),
    StatisticsScreen(
      title: 'Statistics',
    ),
    OfficalCMScreen(
      title: 'Official Circulars & Memos',
    ),
    FAQScreen(
      title: 'FAQ',
    )
  ];
  List<BottomNavigationBarItem> _navItems = <BottomNavigationBarItem>[
    BottomNavigationBarItem(
        icon: Icon(LineIcons.home), title: Text('Information')),
    BottomNavigationBarItem(
        icon: Icon(LineIcons.hospital_o), title: Text('Centres')),
    BottomNavigationBarItem(
        icon: Icon(LineIcons.pie_chart), title: Text('Statistics')),
    BottomNavigationBarItem(
        icon: Icon(LineIcons.info_circle), title: Text('News')),
    BottomNavigationBarItem(
        icon: Icon(LineIcons.question_circle), title: Text('FAQ')),
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
      //backgroundColor: AppColors.primaryElement,
      body: _screens[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        onTap: _onTapped,
        items: _navItems,
        backgroundColor: Theme.of(context).primaryColor,
        unselectedItemColor: Colors.amber,
        selectedItemColor: Colors.white,
        type: BottomNavigationBarType.fixed,
      ),
    );
  }
}
