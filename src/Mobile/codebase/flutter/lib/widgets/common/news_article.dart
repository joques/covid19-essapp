import 'package:flutter/material.dart';
import 'package:covid_19_app/styles/colors.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:shimmer/shimmer.dart';

class NewsArticle extends StatefulWidget {
  final String title;
  final String author;
  final String desc;
  final String imageSrc;
  final String route;

  NewsArticle(
      {Key key,
      @required this.author,
      @required this.imageSrc,
      @required this.desc,
      @required this.title,
      this.route})
      : super(key: key);

  @override
  _NewsArticleState createState() => _NewsArticleState();
}

class _NewsArticleState extends State<NewsArticle> {
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      child: Container(
        height: 150,
        margin: EdgeInsets.only(
          left: 23,
          top: 20,
          right: 17,
          bottom: 10,
        ),
        child: Stack(
          alignment: Alignment.topRight,
          children: [
            Align(
              alignment: Alignment.topLeft,
              child: Container(
                decoration: BoxDecoration(
//                  border: Border.all(
//                    width: 1,
//                    color: Color.fromARGB(255, 112, 112, 112),
//                  ),
                  borderRadius: BorderRadius.all(Radius.circular(50)),
                ),
                width: 95,
                height: 140,
                child: Image.network(
                  widget.imageSrc,
                  fit: BoxFit.cover,
                ),
              ),
            ),
            Positioned(
              left: 10,
              right: 11,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                    margin: EdgeInsets.only(left: 103, bottom: 9),
                    child: AutoSizeText(
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
                  ),
                  Align(
                    alignment: Alignment.topLeft,
                    child: Container(
                      margin: EdgeInsets.only(left: 103, bottom: 4),
                      child: AutoSizeText(
                        widget.author,
                        maxLines: 1,
                        textAlign: TextAlign.left,
                        style: TextStyle(
                          color: Color.fromARGB(255, 112, 112, 112),
                          fontFamily: "Roboto",
                          fontWeight: FontWeight.w400,
                          fontSize: 14,
                        ),
                      ),
                    ),
                  ),
                  Container(
                    height: 85,
                    margin: EdgeInsets.only(left: 103, top: 8),
                    child: AutoSizeText(
                      widget.desc,
                      textAlign: TextAlign.left,
                      maxLines: 4,
                      minFontSize: 14,
                      overflow: TextOverflow.ellipsis,
                      style: GoogleFonts.roboto(
                        color: AppColors.primaryText,
                        fontWeight: FontWeight.w400,
                        fontSize: 17,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
      onTap: () {
        print(widget.title);
      },
    );
  }
}
