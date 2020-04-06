import 'package:covid_19_app/styles/colors.dart';
import 'package:flutter/material.dart';
import 'package:shimmer/shimmer.dart';

class LoadingStats extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    double _wd = (MediaQuery.of(context).size.width / 2) - 45;
    return SingleChildScrollView(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            Shimmer.fromColors(
              child: ClipRRect(
                borderRadius: BorderRadius.circular(30.0),
                child: Container(
                  color: Colors.grey,
                  width: 250,
                  height: 250,
                ),
              ), // Region Heading,
              baseColor: AppColors.secondaryBackground,
              highlightColor: Colors.white70,
            ),
            Divider(),
            SizedBox(
              height: 8,
            ),
            Wrap(
              direction: Axis.horizontal,
              alignment: WrapAlignment.spaceBetween,
              spacing: 100,
              runSpacing: 10,
              crossAxisAlignment: WrapCrossAlignment.center,
              children: <Widget>[
                Shimmer.fromColors(
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(20.0),
                    child: Container(
                      color: Colors.grey,
                      width: 100,
                      height: 20,
                    ),
                  ), // Region Heading,
                  baseColor: AppColors.secondaryBackground,
                  highlightColor: Colors.white70,
                ),
                Wrap(
                  crossAxisAlignment: WrapCrossAlignment.center,
                  children: <Widget>[
                    Shimmer.fromColors(
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(20.0),
                        child: Container(
                          color: Colors.grey,
                          width: 130,
                          height: 20,
                        ),
                      ), // Region Heading,
                      baseColor: AppColors.secondaryBackground,
                      highlightColor: Colors.white70,
                    ),
                  ],
                )
              ],
            ),
            Container(
              child: Column(
                children: <Widget>[
                  SizedBox(
                    height: 16,
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: <Widget>[
                      Shimmer.fromColors(
                        child: ClipRRect(
                          borderRadius: BorderRadius.circular(20.0),
                          child: Container(
                            color: Colors.grey,
                            width: _wd,
                            height: 100,
                          ),
                        ), // Region Heading,
                        baseColor: AppColors.secondaryBackground,
                        highlightColor: Colors.white70,
                      ),
                      Shimmer.fromColors(
                        child: ClipRRect(
                          borderRadius: BorderRadius.circular(20.0),
                          child: Container(
                            color: Colors.grey,
                            width: _wd,
                            height: 100,
                          ),
                        ), // Region Heading,
                        baseColor: AppColors.secondaryBackground,
                        highlightColor: Colors.white70,
                      ),
                    ],
                  ),
                  SizedBox(
                    height: 16,
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: <Widget>[
                      Shimmer.fromColors(
                        child: ClipRRect(
                          borderRadius: BorderRadius.circular(20.0),
                          child: Container(
                            color: Colors.grey,
                            width: _wd,
                            height: 100,
                          ),
                        ), // Region Heading,
                        baseColor: AppColors.secondaryBackground,
                        highlightColor: Colors.white70,
                      ),
                      Shimmer.fromColors(
                        child: ClipRRect(
                          borderRadius: BorderRadius.circular(20.0),
                          child: Container(
                            color: Colors.grey,
                            width: _wd,
                            height: 100,
                          ),
                        ), // Region Heading,
                        baseColor: AppColors.secondaryBackground,
                        highlightColor: Colors.white70,
                      ),
                    ],
                  ),
                ],
              ),
            ),
            SizedBox(
              height: 18,
            ),
            Container(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Text(
                    "Data is provided by:",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: AppColors.secondaryText,
                      fontFamily: "Roboto",
                      fontWeight: FontWeight.w600,
                      fontSize: 12,
                    ),
                  ),
                  SizedBox(
                    width: 5,
                  ),
                  Image.asset(
                    'assets/images/sponsors/liberity.png',
                    height: 50,
                  ),
//                      SvgPicture.asset(
//                        'assets/images/sponsors/NamibiaEmblem-01.svg',
//                        color: AppColors.secondaryText,
//                        height: 70,
//                      ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
