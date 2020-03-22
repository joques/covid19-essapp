import 'package:covid_19_app/styles/colors.dart';
import 'package:flutter/material.dart';

//TODO: Review Needed But Its Working
const String allofNamibia = 'All Of Namibia';
const String kuneneRegion = 'Kunene Region';
const String omusatiRegion = 'Omusati Region';
const String oshanaRegion = 'Oshana Region';
const String ohangwenaRegion = 'Ohangwena Region';
const String oshikotoRegion = 'Oshikoto Region';
const String kavango = 'Kavango Region';
const String zambeziRegion = 'Zambezi Region';
const String erongoRegion = 'Erongo Region';
const String otjozondjupaRegion = 'Otjozondjupa Region';
const String omahekeRegion = 'Omaheke Region';
const String khomasRegion = 'Khomas Region';
const String hardapRegion = 'Hardap Region';
const String karasRegion = 'ǁKaras Region';

class Region {
  String name;
  Color RegionColor;

  Region({@required this.name, @required this.RegionColor});

  //List of Regions with Highlight Colour
  static final List<Region> regions = [
    Region(
      name: 'All Of Namibia',
      RegionColor: Colors.yellow,
    ),
    Region(
      name: 'Kunene Region',
      RegionColor: Colors.orangeAccent,
    ),
    Region(
      name: 'Omusati Region',
      RegionColor: Colors.orange,
    ),
    Region(
      name: 'Oshana Region',
      RegionColor: Colors.deepOrange,
    ),
    Region(
      name: 'Ohangwena Region',
      RegionColor: Colors.deepOrangeAccent,
    ),
    Region(
      name: 'Kavango Region',
      RegionColor: Colors.yellowAccent,
    ),
    Region(
      name: 'Zambezi Region',
      RegionColor: Colors.green,
    ),
    Region(
      name: 'Oshikoto Region',
      RegionColor: Colors.red,
    ),
    Region(
      name: 'Erongo Region',
      RegionColor: Colors.redAccent,
    ),
    Region(
      name: 'Otjozondjupa Region',
      RegionColor: Colors.lightGreen,
    ),
    Region(
      name: 'Omaheke Region',
      RegionColor: Colors.lightGreenAccent,
    ),
    Region(
      name: 'Khomas Region',
      RegionColor: Colors.indigo,
    ),
    Region(
      name: 'Hardap Region',
      RegionColor: Colors.indigoAccent,
    ),
    Region(
      name: 'ǁKaras Region',
      RegionColor: Colors.deepPurple,
    )
  ];

  //TODO: regions.sort((a, b) => a.name.compareTo(b.name))

  static List items = Region.regions
      .map((item) => DropdownMenuItem(
            value: item.name,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Text(
                  item.name,
                  style: TextStyle(
                    color: AppColors.primaryText,
                    fontFamily: "Roboto",
                    fontWeight: FontWeight.w600,
                    fontSize: 16,
                  ),
                ),
              ],
            ),
          ))
      .toList();
}
