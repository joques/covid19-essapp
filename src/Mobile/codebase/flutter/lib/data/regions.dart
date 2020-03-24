import 'package:covid_19_app/styles/colors.dart';
import 'package:flutter/material.dart';

class Region {
  final String name;
  Region({
    @required this.name,
  });

  //List of Regions //TODO: Add More Customisation in the future
  static final List<Region> regions = [
    Region(
      name: 'All of Namibia',
    ),
    Region(
      name: 'Kunene Region',
    ),
    Region(
      name: 'Omusati Region',
    ),
    Region(
      name: 'Oshana Region',
    ),
    Region(
      name: 'Ohangwena Region',
    ),
    Region(
      name: 'Kavango Region',
    ),
    Region(
      name: 'Zambezi Region',
    ),
    Region(
      name: 'Oshikoto Region',
    ),
    Region(
      name: 'Erongo Region',
    ),
    Region(
      name: 'Otjozondjupa Region',
    ),
    Region(
      name: 'Omaheke Region',
    ),
    Region(
      name: 'Khomas Region',
    ),
    Region(
      name: 'Hardap Region',
    ),
    Region(
      name: 'ǁKaras Region',
    )
  ];

  //TODO: regions.sort((a, b) => a.name.compareTo(b.name))
  //List of Regions Names in the Picker list.
  static List items = Region.regions
      .map(
        (item) => Text(
          item.name,
          style: TextStyle(
            color: AppColors.primaryText,
            fontFamily: "Roboto",
            fontWeight: FontWeight.w600,
            fontSize: 16,
          ),
        ),
      )
      .toList();
}
