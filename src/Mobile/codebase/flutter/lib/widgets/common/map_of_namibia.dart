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
  final Color kavangoEastColor;
  final Color kavangoWestColor;
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
  final String kavangoEastRegion = '6';
  final String zambeziRegion = '7';
  final String erongoRegion = '8';
  final String otjozondjupaRegion = '9';
  final String omahekeRegion = '10';
  final String khomasRegion = '11';
  final String hardapRegion = '12';
  final String karasRegion = '13';
  final String kavangoWestRegion = '14';

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
      this.kavangoEastColor,
      this.kavangoWestColor,
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
                            'assets/images/regions/kuneneRegion.svg',
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
                            "assets/images/regions/karasRegion.svg",
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
                    "assets/images/regions/hardapRegion.svg",
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
                    "assets/images/regions/khomasRegion.svg",
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
                    "assets/images/regions/erongoRegion.svg",
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
                    "assets/images/regions/otjozondjupaRegion.svg",
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
                                  "assets/images/regions/omusatiRegion.svg",
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
                                margin: EdgeInsets.only(
                                  right: 10.8,
                                ),
                                child: SvgPicture.asset(
                                  "assets/images/regions/kavangoWestRegion.svg",
                                  color: widget.value ==
                                              widget.kavangoWestRegion ||
                                          widget.value == widget.defaultLocation
                                      ? widget.kavangoWestColor == null
                                          ? widget.selectedColor
                                          : widget.kavangoWestColor
                                      : widget.baseColor,
                                  fit: BoxFit.none,
                                ),
                              ),
                            ), //TODO: kavangoWestRegion
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
                            "assets/images/regions/omahekeRegion.svg",
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
                    "assets/images/regions/oshanaRegion.svg",
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
                    "assets/images/regions/ohangwenaRegion.svg",
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
                            'assets/images/regions/oshikotoRegion.svg',
                            color: widget.value == widget.oshikotoRegion ||
                                    widget.value == widget.defaultLocation
                                ? widget.oshikotoColor == null
                                    ? widget.selectedColor
                                    : widget.oshikotoColor
                                : widget.baseColor,
                          ),
                        ),
                      ), //TODO: oshikotoRegion
                      Align(
                        alignment: Alignment.topLeft,
                        child: Container(
                          width: 56,
                          height: 28,
                          margin: EdgeInsets.only(left: 13.7),
                          child: SvgPicture.asset(
                            "assets/images/regions/kavangoEastRegion.svg",
                            color: widget.value == widget.kavangoEastRegion ||
                                    widget.value == widget.defaultLocation
                                ? widget.kavangoEastColor == null
                                    ? widget.selectedColor
                                    : widget.kavangoEastColor
                                : widget.baseColor,
                            fit: BoxFit.none,
                          ),
                        ),
                      ), //TODO: kavangoWestRegion
                    ],
                  ),
                ),
                Align(
                  alignment: Alignment.topLeft,
                  child: Container(
                    margin: EdgeInsets.only(left: 157, top: 8),
                    width: 80,
                    height: 16,
                    child: SvgPicture.asset(
                      'assets/images/regions/zambeziRegion.svg',
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
    ); // Map
  }
}
