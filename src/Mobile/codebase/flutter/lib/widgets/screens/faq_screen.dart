import 'package:flutter/material.dart';
import 'package:covid_19_app/styles/colors.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class FAQScreen extends StatefulWidget {
  final String title;
  
  FAQScreen({Key key, this.title}) : super(key: key);

  @override
  _FAQScreenState createState() => _FAQScreenState();
}

class FAQ {
  FAQ({
    this.question,
    this.answer,
    this.id,
    this.isExpanded = false,
  });

  String question;
  String answer;
  dynamic id;
  bool isExpanded;
  factory FAQ.fromJson(Map<String, dynamic> json) {
    return new FAQ(
      id: json['_id'],
      question: json['question'],
      answer: json['answer'],
    );
  }
}

List<FAQ> _data = new List(0);
//var getFAQ = fetchFAQ();
//var myData = jsonDecode(snapshot.data);

List<FAQ> generateItems(int numberOfItems) {
  return List.generate(numberOfItems, (int index) {
    return FAQ(
      question: 'Question  $index ?',
      answer:
          'This is the answer for $index \nLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque massa, rhoncus non quam mattis.',
    );
  });
}

class _FAQScreenState extends State<FAQScreen> {
  Future<dynamic> _future;
  @override
  void initState() {
    _future = fetchFAQ();
    super.initState();
  }
  @override
  Widget build(BuildContext context) {
    return FutureBuilder<dynamic>(
      future: _future, // function where you call your api
      builder: (BuildContext context, AsyncSnapshot<dynamic> snapshot) {
        // AsyncSnapshot<Your object type>
        if (snapshot.connectionState == ConnectionState.waiting &&
            _data.length == 0) {
          return Center(child: Text('LOADING PLEASE WAIT...'));
        } else {
          if (snapshot.hasError)
            return Center(child: Text('Error: ${snapshot.error}'));
          else
            return Scaffold(
                appBar: AppBar(
                  title: Text(
                    widget.title,
                  ),
                  centerTitle: true,
                ),
                body: SingleChildScrollView(
                  child: Container(
                    child: _buildPanel(),
                  ),
                )); // snapshot.data  :- get your object which is pass from your downloadData() function
        }
      },
    );
  }

  Widget _buildPanel() {
    return ExpansionPanelList(
      expansionCallback: (int index, bool isExpanded) {
        setState(() {
          _data[index].isExpanded = !isExpanded;
        });
      },
      children: _data.map<ExpansionPanel>((FAQ item) {
        return ExpansionPanel(
          headerBuilder: (BuildContext context, bool isExpanded) {
            return ListTile(
              leading: Icon(Icons.question_answer),
              title: Text(item.question,
                  style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.w700,
                      color: AppColors.primaryText),
                  textAlign: TextAlign.start),
            );
          },
          body: ListTile(
            leading: Icon(Icons.lightbulb_outline),
            title: Text(item.answer),
          ),
          isExpanded: item.isExpanded,
        );
      }).toList(),
    );
  }
}

fetchFAQ() async {
  //http://196.216.167.150:6549/covid/v1/statistics/latest');
  final response =
      await http.get("http://196.216.167.150:6551/covid/v1/faq/all");

  if (response.statusCode == 200) {
    // If the server did return a 200 OK response,
    // then parse the JSON.
    List<FAQ> faqList = (json.decode(response.body) as List)
        .map((i) => FAQ.fromJson(i))
        .toList();
  
    //Only update data if server has new info
    if (_data.length == 0 || _data.length != faqList.length ) {
      _data = new List(faqList.length);
      for (var i = 0; i < faqList.length; i++) {
        _data[i] = faqList[i];
      }
    }
    return faqList;//return future instance of the data
    
  } else {
    // If the server did not return a 200 OK response,
    // then throw an exception.
    debugPrint("HERE" + response.toString());
    throw Exception('Failed to load latest info');
  }
}
