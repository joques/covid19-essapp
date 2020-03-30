import 'package:covid_19_app/styles/colors.dart';
import 'package:covid_19_app/widgets/common/news_article.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'dart:async';

class NewsScreen extends StatefulWidget {
  final String title;
  NewsScreen({Key key, this.title}) : super(key: key);

  @override
  _NewsScreenState createState() => _NewsScreenState();
}

class _NewsScreenState extends State<NewsScreen> {
  //Dummy Date Now
  String refreshDate = DateTime.now().toUtc().toString();
  final Completer<WebViewController> _controller =
      Completer<WebViewController>();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        
        body: WebView(
          initialUrl: "https://live.namibian.com.na",
          javascriptMode: JavascriptMode.unrestricted,
          onWebViewCreated: (WebViewController webViewController) {
            _controller.complete(webViewController);
          },
        ));
  }
  // Widget build(BuildContext context) {
  //   return SingleChildScrollView(
  //     child: Column(
  //       mainAxisAlignment: MainAxisAlignment.center,
  //       crossAxisAlignment: CrossAxisAlignment.center,
  //       children: <Widget>[
  //         Container(
  //           height: 25,
  //           margin: EdgeInsets.only(
  //             left: 25,
  //             top: 20,
  //             bottom: 5,
  //             right: 20,
  //           ),
  //           child: Row(
  //             crossAxisAlignment: CrossAxisAlignment.stretch,
  //             children: [
  //               Container(
  //                 child: Text(
  //                   "Recent News",
  //                   textAlign: TextAlign.left,
  //                   style: TextStyle(
  //                     color: AppColors.primaryText,
  //                     fontFamily: "Roboto",
  //                     fontWeight: FontWeight.w700,
  //                     fontSize: 19,
  //                   ),
  //                 ),
  //                 margin: EdgeInsets.only(bottom: 5),
  //               ),
  //             ],
  //           ),
  //         ), // Latest News
  //         Divider(),
  //         NewsArticle(
  //           title: 'What is Coronavirus?',
  //           author: 'The World Health Organization',
  //           source:
  //               'https://www.who.int/docs/default-source/inaugural-who-partners-forum/coronavirus-poster-english-srilanka.pdf?sfvrsn=289dedc3_0',
  //           pubdate: 'Mar 20, 2020',
  //           docid: 'Mar 20, 2020',
  //         ),
  //         NewsArticle(
  //           title: 'What is Coronavirus?',
  //           author: 'The World Health Organization',
  //           source:
  //               'https://www.who.int/docs/default-source/inaugural-who-partners-forum/coronavirus-poster-english-srilanka.pdf?sfvrsn=289dedc3_0',
  //           pubdate: 'Mar 20, 2020',
  //           docid: 'Mar 20, 2020',
  //         ),
  //         NewsArticle(
  //           title: 'What is Coronavirus?',
  //           author: 'The World Health Organization',
  //           source:
  //               'https://www.who.int/docs/default-source/inaugural-who-partners-forum/coronavirus-poster-english-srilanka.pdf?sfvrsn=289dedc3_0',
  //           pubdate: 'Mar 20, 2020',
  //           docid: 'Mar 20, 2020',
  //         ),
  //         NewsArticle(
  //           title: 'What is Coronavirus?',
  //           author: 'The World Health Organization',
  //           source:
  //               'https://www.who.int/docs/default-source/inaugural-who-partners-forum/coronavirus-poster-english-srilanka.pdf?sfvrsn=289dedc3_0',
  //           pubdate: 'Mar 20, 2020',
  //           docid: 'Mar 20, 2020',
  //         ),
  //       ],
  //     ),
  //   );
  // }

}
