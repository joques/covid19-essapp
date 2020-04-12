import 'package:covid_19_app/data/packages.dart';

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
    StatisticsScreen(
      title: 'Statistics',
    ),
    OfficalCMScreen(
      title: 'Official Circulars & Memos',
    ),
    FAQScreen(
      title: 'FAQ',
    ),
    SettingsScreen(
      title: 'Settings',
    )
  ];
  List<BottomNavigationBarItem> _navItems = <BottomNavigationBarItem>[
    BottomNavigationBarItem(
        icon: Icon(LineIcons.home), title: Text('Home')),
    BottomNavigationBarItem(
        icon: Icon(LineIcons.pie_chart), title: Text('Statistics')),
    BottomNavigationBarItem(
        icon: Icon(LineIcons.info_circle), title: Text('News')),
    BottomNavigationBarItem(
        icon: Icon(LineIcons.question_circle), title: Text('FAQ')),
    BottomNavigationBarItem(
        icon: Icon(LineIcons.gear), title: Text('Info')),
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
      //drawer: NavDrawer(),
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
