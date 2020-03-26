import 'package:flutter/material.dart';
import 'package:covid_19_app/styles/colors.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:shimmer/shimmer.dart';

class FeaturedArticle extends StatefulWidget {
  final String title;
  final String author;
  final String desc;
  final String imageSrc;
  final String route;

  FeaturedArticle(
      {Key key,
      @required this.author,
      @required this.imageSrc,
      @required this.desc,
      @required this.title,
      this.route})
      : super(key: key);

  @override
  _FeaturedArticleState createState() => _FeaturedArticleState();
}

class _FeaturedArticleState extends State<FeaturedArticle> {
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      child: Container(
        margin: EdgeInsets.all(28),
        child: Column(
          children: <Widget>[
            Container(
              margin: EdgeInsets.only(bottom: 9),
              height: 50,
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Expanded(
                    child: AutoSizeText(
                      widget.title,
                      maxLines: 2,
                      textAlign: TextAlign.left,
                      style: GoogleFonts.lora(
                        color: AppColors.primaryText,
                        letterSpacing: 2.0,
                        fontWeight: FontWeight.w700,
                        fontSize: 19,
                      ),
                    ),
                  ),
                ],
              ),
            ),
            Container(
              margin: EdgeInsets.only(bottom: 4),
              height: 20,
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Expanded(
                    child: AutoSizeText(
                      widget.author,
                      maxLines: 1,
                      textAlign: TextAlign.left,
                      style: GoogleFonts.roboto(
                        color: AppColors.secondaryText,
                        fontWeight: FontWeight.w500,
                        fontSize: 14,
                      ),
                    ),
                  ),
                ],
              ),
            ),
            Container(
              height: 140,
              decoration: BoxDecoration(
                color: AppColors.secondaryBackground,
                borderRadius: BorderRadius.circular(9.0),
              ),
              child: Image.network(
                widget.imageSrc,
                fit: BoxFit.cover,
              ), //TODO: Image Goes Here
            ),
            Container(
              margin: EdgeInsets.only(top: 9.0),
              height: 100,
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Expanded(
                    child: AutoSizeText(
                      widget.desc,
                      textAlign: TextAlign.left,
                      minFontSize: 14,
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
