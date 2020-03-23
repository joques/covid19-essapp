import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class NamibianMap extends StatefulWidget {
  //The Parameters used to change the colour of the map
  final String value;
  final Color selectedColor;
  final Color baseColor;

  //Optional Unique Region Colours
  final Color kuneneColor;
  final Color omusatiColor;
  final Color oshanaColor;
  final Color ohangwenaColor;
  final Color oshikotoColor;
  final Color kavangoColor;
  final Color zambeziColor;
  final Color erongoColor;
  final Color otjozondjupaColor;
  final Color omahekeColor;
  final Color khomasColor;
  final Color hardapColor;
  final Color karasColor;

  //Regions By Name will be used to compare with var value
  final String defaultLocation = '0';
  final String kuneneRegion = '1';
  final String omusatiRegion = '2';
  final String oshanaRegion = '3';
  final String ohangwenaRegion = '4';
  final String oshikotoRegion = '5';
  final String kavangoRegion = '6';
  final String zambeziRegion = '7';
  final String erongoRegion = '8';
  final String otjozondjupaRegion = '9';
  final String omahekeRegion = '10';
  final String khomasRegion = '11';
  final String hardapRegion = '12';
  final String karasRegion = '13';

  NamibianMap(
      {Key key,
      @required this.value,
      @required this.selectedColor,
      @required this.baseColor,
      this.kuneneColor,
      this.omusatiColor,
      this.oshanaColor,
      this.ohangwenaColor,
      this.oshikotoColor,
      this.kavangoColor,
      this.zambeziColor,
      this.erongoColor,
      this.otjozondjupaColor,
      this.omahekeColor,
      this.khomasColor,
      this.hardapColor,
      this.karasColor})
      : super(key: key);

  @override
  _NamibianMapState createState() => _NamibianMapState();
}

class _NamibianMapState extends State<NamibianMap> {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 250,
      height: 250,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            width: 206,
            height: 195,
            child: Stack(
              children: [
                Positioned(
                  left: 0,
                  top: 0,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Align(
                        child: Container(
                          width: 75,
                          height: 67,
                          child: SvgPicture.asset(
                            'assets/images/kuneneRegion.svg',
                            color: widget.value == widget.kuneneRegion ||
                                    widget.value == widget.defaultLocation
                                ? widget.kuneneColor == null
                                    ? widget.selectedColor
                                    : widget.kuneneColor
                                : widget.baseColor,
                          ),
                        ),
                      ), //TODO: kuneneRegion
                      Align(
                        alignment: Alignment.topLeft,
                        child: Container(
                          width: 77,
                          height: 66,
                          margin: EdgeInsets.only(left: 46.6, top: 62.6),
                          child: SvgPicture.asset(
                            "assets/images/karasRegion.svg",
                            color: widget.value == widget.karasRegion ||
                                    widget.value == widget.defaultLocation
                                ? widget.karasColor == null
                                    ? widget.selectedColor
                                    : widget.karasColor
                                : widget.baseColor,
                            fit: BoxFit.none,
                          ),
                        ),
                      ), //TODO: karasRegion
                    ],
                  ),
                ),
                Positioned(
                  left: 41,
                  top: 99.3,
                  child: SvgPicture.asset(
                    "assets/images/hardapRegion.svg",
                    color: widget.value == widget.hardapRegion ||
                            widget.value == widget.defaultLocation
                        ? widget.hardapColor == null
                            ? widget.selectedColor
                            : widget.hardapColor
                        : widget.baseColor,
                    fit: BoxFit.none,
                  ),
                ), //TODO: hardapRegion
                Positioned(
                  left: 60.4,
                  top: 75.5,
                  child: SvgPicture.asset(
                    "assets/images/khomasRegion.svg",
                    color: widget.value == widget.khomasRegion ||
                            widget.value == widget.defaultLocation
                        ? widget.khomasColor == null
                            ? widget.selectedColor
                            : widget.khomasColor
                        : widget.baseColor,
                    fit: BoxFit.none,
                  ),
                ), //TODO: khomasRegion
                Positioned(
                  left: 29,
                  top: 55.9,
                  child: SvgPicture.asset(
                    "assets/images/erongoRegion.svg",
                    color: widget.value == widget.erongoRegion ||
                            widget.value == widget.defaultLocation
                        ? widget.erongoColor == null
                            ? widget.selectedColor
                            : widget.erongoColor
                        : widget.baseColor,
                    fit: BoxFit.none,
                  ),
                ), //TODO: erongoRegion
                Positioned(
                  left: 58.6,
                  top: 28.6,
                  child: SvgPicture.asset(
                    "assets/images/otjozondjupaRegion.svg",
                    color: widget.value == widget.otjozondjupaRegion ||
                            widget.value == widget.defaultLocation
                        ? widget.otjozondjupaColor == null
                            ? widget.selectedColor
                            : widget.otjozondjupaColor
                        : widget.baseColor,
                    fit: BoxFit.none,
                  ),
                ), //TODO: otjozondjupaRegion
                Positioned(
                  left: 36.5,
                  top: 7,
                  right: 63,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      Container(
                        height: 32,
                        child: Row(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            Align(
                              alignment: Alignment.topLeft,
                              child: Container(
                                width: 23,
                                height: 32,
                                child: SvgPicture.asset(
                                  "assets/images/omusatiRegion.svg",
                                  color: widget.value == widget.omusatiRegion ||
                                          widget.value == widget.defaultLocation
                                      ? widget.omusatiColor == null
                                          ? widget.selectedColor
                                          : widget.omusatiColor
                                      : widget.baseColor,
                                  fit: BoxFit.none,
                                ),
                              ),
                            ), //TODO: omusatiRegion
                            Spacer(),
                            Align(
                              alignment: Alignment.topLeft,
                              child: Container(
                                width: 50,
                                height: 28,
                                margin: EdgeInsets.only(right: 1.5),
                                child: SvgPicture.asset(
                                  "assets/images/kavangoRegion.svg",
                                  color: widget.value == widget.kavangoRegion ||
                                          widget.value == widget.defaultLocation
                                      ? widget.kavangoColor == null
                                          ? widget.selectedColor
                                          : widget.kavangoColor
                                      : widget.baseColor,
                                  fit: BoxFit.none,
                                ),
                              ),
                            ), //TODO: kavangoRegion
                          ],
                        ),
                      ),
                      Align(
                        alignment: Alignment.topRight,
                        child: Container(
                          width: 45,
                          height: 58,
                          margin: EdgeInsets.only(top: 13.3, right: 4.2),
                          child: SvgPicture.asset(
                            "assets/images/omahekeRegion.svg",
                            color: widget.value == widget.omahekeRegion ||
                                    widget.value == widget.defaultLocation
                                ? widget.omahekeColor == null
                                    ? widget.selectedColor
                                    : widget.omahekeColor
                                : widget.baseColor,
                            fit: BoxFit.none,
                          ),
                        ),
                      ), //TODO: omahekeRegion
                    ],
                  ),
                ),
                Positioned(
                  left: 54,
                  top: 11.8,
                  child: SvgPicture.asset(
                    "assets/images/oshanaRegion.svg",
                    color: widget.value == widget.oshanaRegion ||
                            widget.value == widget.defaultLocation
                        ? widget.oshanaColor == null
                            ? widget.selectedColor
                            : widget.oshanaColor
                        : widget.baseColor,
                    fit: BoxFit.none,
                  ),
                ), // TODO: oshanaRegion
                Positioned(
                  left: 58.7,
                  top: 7,
                  child: SvgPicture.asset(
                    "assets/images/ohangwenaRegion.svg",
                    color: widget.value == widget.ohangwenaRegion ||
                            widget.value == widget.defaultLocation
                        ? widget.ohangwenaColor == null
                            ? widget.selectedColor
                            : widget.ohangwenaColor
                        : widget.baseColor,
                    fit: BoxFit.none,
                  ),
                ), //TODO: ohangwenaRegion
                Positioned(
                  left: 62.4,
                  top: 7.6,
                  right: 0,
                  child: Row(
                    children: [
                      Align(
                        alignment: Alignment.topLeft,
                        child: Container(
                          width: 35,
                          height: 29,
                          margin: EdgeInsets.only(top: 4),
                          child: SvgPicture.asset(
                            'assets/images/oshikotoRegion.svg',
                            color: widget.value == widget.oshikotoRegion ||
                                    widget.value == widget.defaultLocation
                                ? widget.oshikotoColor == null
                                    ? widget.selectedColor
                                    : widget.oshikotoColor
                                : widget.baseColor,
                          ),
                        ),
                      ), //TODO: oshikotoRegion
                      Spacer(),
                      Align(
                        alignment: Alignment.topLeft,
                        child: Container(
                          margin: EdgeInsets.only(right: 3, bottom: 16),
                          width: 64,
                          height: 16,
                          child: SvgPicture.asset(
                            'assets/images/zambeziRegion.svg',
                            color: widget.value == widget.zambeziRegion ||
                                    widget.value == widget.defaultLocation
                                ? widget.zambeziColor == null
                                    ? widget.selectedColor
                                    : widget.zambeziColor
                                : widget.baseColor,
                          ),
                        ),
                      ), //TODO: zambeziRegion
                    ],
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    ); // Map
  }
}
