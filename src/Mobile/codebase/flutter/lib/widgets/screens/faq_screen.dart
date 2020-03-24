import 'package:flutter/material.dart';
import 'package:covid_19_app/styles/colors.dart';

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
    this.isExpanded = false,
  });

  String question;
  String answer;
  bool isExpanded;
}

List<FAQ> _data = generateItems(9);

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
          child: Container(
            child: _buildPanel(),
          ),
        ));
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
