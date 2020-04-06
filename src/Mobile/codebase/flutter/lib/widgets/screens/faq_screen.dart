import 'package:covid_19_app/data/api.dart';
import 'package:covid_19_app/data/store/Store.dart';
import 'package:covid_19_app/models/faq.dart';
import 'package:covid_19_app/styles/colors.dart';
import 'package:covid_19_app/widgets/common/loading_faq.dart';
import 'package:expandable/expandable.dart';
import 'package:flutter/material.dart';

class FAQScreen extends StatefulWidget {
  final String title;

  FAQScreen({Key key, this.title}) : super(key: key);

  @override
  _FAQScreenState createState() => _FAQScreenState();
}

/*class FAQ {
 */ /* FAQ({
    this.question,
    this.answer,
    this.id,
    this.isExpanded = false,
  });*/ /*

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
}*/

List<FAQ> _data = new List(0);

Store store = Store.instance;
//var getFAQ = fetchFAQ();
//var myData = jsonDecode(snapshot.data);

class _FAQScreenState extends State<FAQScreen> {
  @override
  void initState() {
    super.initState();
  }

  //TODO: Attempting to check internet connection state, then show a place holding loading widget (reviewing needed).
  @override
  Widget build(BuildContext context) {
    return Scaffold(
//      drawer: NavDrawer(),
      appBar: AppBar(
        title: Text(widget.title),
        centerTitle: true,
      ),
      body: FutureBuilder<List<FAQ>>(
          future: store.getFaqs(),
          builder: (context, snapshot) {
            if (snapshot.hasData) {
              return ListView(
                children: List.generate(
                    snapshot.data.length,
                    (index) => ExpandableNotifier(
                            child: Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 10),
                          child: Card(
                            shape: BeveledRectangleBorder(
                                borderRadius: BorderRadius.only(
                                    bottomRight: Radius.circular(16))),
                            color: Theme.of(context).dialogBackgroundColor,
                            clipBehavior: Clip.antiAlias,
                            child: Column(
                              children: <Widget>[
                                /*SizedBox(
                                  height: 150,
                                  child: Container(
                                    decoration: BoxDecoration(
                                      color: Colors.orange,
                                      shape: BoxShape.rectangle,
                                    ),
                                  ),
                                ),*/
                                ScrollOnExpand(
                                  scrollOnExpand: true,
                                  scrollOnCollapse: false,
                                  child: ExpandablePanel(
                                    theme: const ExpandableThemeData(
                                      iconColor: AppColors.primaryElement,
                                      headerAlignment:
                                          ExpandablePanelHeaderAlignment.center,
                                      tapBodyToCollapse: true,
                                    ),
                                    header: Padding(
                                        padding: EdgeInsets.all(10),
                                        child: Text(
                                          snapshot.data[index].question,
                                          style: Theme.of(context)
                                              .textTheme
                                              .headline
                                              .copyWith(
                                                color: AppColors.primaryElement,
                                                fontWeight: FontWeight.w800,
                                                fontSize: 18,
                                              ),
                                        )),
                                    collapsed: Text(
                                      snapshot.data[index].answer,
                                      softWrap: true,
                                      maxLines: 2,
                                      overflow: TextOverflow.ellipsis,
                                      style: Theme.of(context)
                                          .textTheme
                                          .body1
                                          .copyWith(
                                            fontWeight: FontWeight.w400,
                                            fontSize: 16,
                                            color: AppColors.secondaryText,
                                          ),
                                    ),
                                    expanded: Padding(
                                        padding: EdgeInsets.only(
                                            bottom: 16, top: 16),
                                        child: Text(
                                          snapshot.data[index].answer,
                                          softWrap: true,
                                          overflow: TextOverflow.fade,
                                          style: Theme.of(context)
                                              .textTheme
                                              .body1
                                              .copyWith(
                                                  fontWeight: FontWeight.w400,
                                                  fontSize: 18,
                                                  color:
                                                      AppColors.primaryElement),
                                        )),
                                    builder: (_, collapsed, expanded) {
                                      return Padding(
                                        padding: EdgeInsets.only(
                                            left: 10, right: 10, bottom: 10),
                                        child: Expandable(
                                          collapsed: collapsed,
                                          expanded: expanded,
                                          theme: const ExpandableThemeData(
                                              crossFadePoint: 0),
                                        ),
                                      );
                                    },
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ))),
              );
            } else if (snapshot.hasError) {
              return LoadingFaq();
//                Center(
//                child: Text('Error getting data!'),
//              );
            }
            return LoadingFaq();
//              Center(
//              child: CircularProgressIndicator(
//                backgroundColor: AppColors.primaryBackground,
//              ),
//            );
          }),
    );
  }
}

/// SingleChildScrollView(
//                child: ExpansionPanelList(
//                  expansionCallback: (int index, bool isExpanded) {
//                    /*setState(() {
//                //_data[index].isExpanded = !isExpanded;
//              });*/
//                  },
//                  children: List.generate(snapshot.data.length, (index) {
//                    return ExpansionPanel(
//                      headerBuilder: (BuildContext context, bool isExpanded) {
//                        return ListTile(
//                          leading: Icon(Icons.question_answer),
//                          title: Text(snapshot.data[index].question,
//                              style: TextStyle(
//                                  fontSize: 18,
//                                  fontWeight: FontWeight.w700,
//                                  color: AppColors.primaryText),
//                              textAlign: TextAlign.start),
//                        );
//                      },
//                      body: ListTile(
//                        leading: Icon(Icons.lightbulb_outline),
//                        title: Text(snapshot.data[index].answer),
//                      ),
//                      isExpanded: false,
//                    );
//                  }),
//                ),
//              )
