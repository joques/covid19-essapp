import 'package:flutter/material.dart';
import 'package:covid_19_app/styles/colors.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:advance_pdf_viewer/advance_pdf_viewer.dart';

class NewsArticle extends StatefulWidget {
  final String title;
  final String docid;
  final String author;
  final String pubdate;
  final String source;

  NewsArticle({
    Key key,
    @required this.author,
    @required this.docid,
    @required this.pubdate,
    @required this.source,
    @required this.title,
  }) : super(key: key);

  @override
  _NewsArticleState createState() => _NewsArticleState();
}

class _NewsArticleState extends State<NewsArticle> {
  bool isLoading = true;
  PDFDocument doc;

  loadDocument() async {
    doc = await PDFDocument.fromURL(widget.source);
    setState(() => isLoading = false);
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      color: Colors.white,
      child: ListTile(
          contentPadding: EdgeInsets.all(20),
          title: AutoSizeText(
            widget.title,
            textAlign: TextAlign.left,
            maxLines: 2,
            style: GoogleFonts.lora(
              color: AppColors.primaryText,
              letterSpacing: 2.0,
              fontWeight: FontWeight.w700,
              fontSize: 16,
            ),
          ),
          trailing: Icon(Icons.arrow_forward_ios),
          subtitle: Container(
            margin: EdgeInsets.only(top: 8),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Container(
                  child: AutoSizeText(
                    widget.author,
                    maxLines: 1,
                    textAlign: TextAlign.left,
                    style: TextStyle(
                      color: AppColors.ternaryBackground,
                      fontFamily: "Roboto",
                      fontWeight: FontWeight.w400,
                      fontSize: 14,
                    ),
                  ),
                  margin: EdgeInsets.only(bottom: 4),
                ),
                AutoSizeText(
                  widget.pubdate,
                  textAlign: TextAlign.left,
                  maxLines: 4,
                  minFontSize: 14,
                  style: GoogleFonts.roboto(
                    color: Color.fromARGB(255, 112, 112, 112),
                    fontWeight: FontWeight.w400,
                    fontSize: 14,
                  ),
                )
              ],
            ),
          ),
          onTap: () {
            loadDocument().then(
              (path) {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      fullscreenDialog: true,
                      builder: (context) => PDFViewer(
                            document: doc,
                          )),
                );
                print(widget.title);
              },
            );
          }),
    );
  }
}
