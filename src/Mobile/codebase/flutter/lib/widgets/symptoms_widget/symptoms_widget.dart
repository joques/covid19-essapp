/*
*  symptoms_widget.dart
*  covid19-essapp
*
*  Created by UI Team.
*  Copyright © 2018 na.nust. All rights reserved.
    */

import 'package:covid19_essapp/values/values.dart';
import 'package:flutter/material.dart';


class SymptomsWidget extends StatelessWidget {
	
	void onCheckboxOnLightValueChanged(BuildContext context) {
	
	}
	
	void onCheckboxOffLightValueChanged(BuildContext context) {
	
	}
	
	void onCheckboxOffLightTwoValueChanged(BuildContext context) {
	
	}
	
	void onGroup792ValueChanged(BuildContext context) {
	
	}
	
	void onCallButtonPressed(BuildContext context) {
	
	}
	
	void onBackArrowPressed(BuildContext context) => Navigator.pop(context);
	
	@override
	Widget build(BuildContext context) {
	
		return Scaffold(
			extendBodyBehindAppBar: true,
			appBar: AppBar(
				title: Text(
					"SYMPTOMS",
					textAlign: TextAlign.center,
					style: TextStyle(
						color: AppColors.accentText,
						fontFamily: "Roboto",
						fontWeight: FontWeight.w700,
						fontSize: 14,
					),
				),
				leading: IconButton(
					onPressed: () => this.onBackArrowPressed(context),
					icon: Image.asset("assets/images/backward-arrow-2.png",),
				),
				backgroundColor: Color.fromARGB(255, 40, 53, 67),
			),
			body: Container(
				constraints: BoxConstraints.expand(),
				decoration: BoxDecoration(
					color: Color.fromARGB(255, 255, 255, 255),
				),
				child: Column(
					crossAxisAlignment: CrossAxisAlignment.stretch,
					children: [
						Container(
							height: 175,
							margin: EdgeInsets.only(left: 15, top: 83, right: 19),
							child: Stack(
								alignment: Alignment.center,
								children: [
									Positioned(
										left: 0,
										top: 0,
										right: 0,
										child: Container(
											height: 144,
											decoration: BoxDecoration(
												color: AppColors.secondaryBackground,
												borderRadius: Radii.k10pxRadius,
											),
											child: Stack(
												alignment: Alignment.topCenter,
												children: [
													Positioned(
														left: 20,
														top: 18,
														right: 20,
														child: Stack(
															alignment: Alignment.center,
															children: [
																Positioned(
																	left: 0,
																	top: 0,
																	right: 68,
																	child: Text(
																		"What is CoronaVirus (COVID-19)?",
																		textAlign: TextAlign.left,
																		style: TextStyle(
																			color: AppColors.primaryText,
																			fontFamily: "Arial",
																			fontWeight: FontWeight.w700,
																			fontSize: 22,
																		),
																	),
																),
																Positioned(
																	top: 8,
																	right: 0,
																	child: Image.asset(
																		"assets/images/path-773.png",
																		fit: BoxFit.none,
																	),
																),
															],
														),
													),
													Positioned(
														left: 20,
														top: 0,
														right: 109,
														child: Text(
															"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
															textAlign: TextAlign.left,
															style: TextStyle(
																color: AppColors.secondaryText,
																fontFamily: "Arial",
																fontWeight: FontWeight.w400,
																fontSize: 13,
															),
														),
													),
												],
											),
										),
									),
									Positioned(
										top: 138,
										child: Container(),
									),
								],
							),
						),
						Align(
							alignment: Alignment.topCenter,
							child: Container(
								width: 335,
								height: 3,
								child: Image.asset(
									"assets/images/line-4.png",
									fit: BoxFit.cover,
								),
							),
						),
						Container(
							height: 45,
							margin: EdgeInsets.only(left: 14, top: 11, right: 15),
							child: Row(
								children: [
									Container(
										width: 43,
										height: 45,
										child: Image.asset(
											"assets/images/iconfinder-mask-wearing-doctor-protection-flu-5729681.png",
											fit: BoxFit.none,
										),
									),
									Expanded(
										flex: 1,
										child: Container(
											margin: EdgeInsets.only(left: 15, right: 22),
											child: Text(
												"Do You Have A Dry cough?",
												textAlign: TextAlign.left,
												style: TextStyle(
													color: AppColors.primaryText,
													fontFamily: "Roboto",
													fontWeight: FontWeight.w400,
													fontSize: 16,
												),
											),
										),
									),
									Container(
										width: 51,
										height: 31,
										child: Switch.adaptive(
											value: false,
											inactiveTrackColor: Color.fromARGB(60, 0, 0, 0),
											onChanged: (value) {
											
											},
											activeColor: AppColors.primaryElement,
											activeTrackColor: AppColors.primaryElement,
										),
									),
								],
							),
						),
						Container(
							height: 45,
							margin: EdgeInsets.only(left: 15, top: 32, right: 14),
							child: Row(
								children: [
									Container(
										width: 43,
										height: 45,
										child: Image.asset(
											"assets/images/iconfinder-headache-migraine-severe-head-pain-shock-5729677.png",
											fit: BoxFit.none,
										),
									),
									Expanded(
										flex: 1,
										child: Container(
											height: 41,
											margin: EdgeInsets.only(left: 15),
											child: Stack(
												alignment: Alignment.center,
												children: [
													Positioned(
														right: 0,
														child: Switch.adaptive(
															value: false,
															inactiveTrackColor: Color.fromARGB(60, 0, 0, 0),
															onChanged: (value) {
															
															},
															activeColor: AppColors.primaryElement,
															activeTrackColor: AppColors.primaryElement,
														),
													),
													Positioned(
														left: 0,
														right: 34,
														child: Text(
															"Is Your Temperature 38ºC and Above",
															textAlign: TextAlign.left,
															style: TextStyle(
																color: AppColors.primaryText,
																fontFamily: "Roboto",
																fontWeight: FontWeight.w400,
																fontSize: 16,
															),
														),
													),
												],
											),
										),
									),
								],
							),
						),
						Container(
							height: 45,
							margin: EdgeInsets.only(left: 14, top: 31, right: 15),
							child: Row(
								children: [
									Container(
										width: 42,
										height: 45,
										child: Image.asset(
											"assets/images/iconfinder-pneumonia-lung-inflamation-bronchitis-influenza-5729683.png",
											fit: BoxFit.none,
										),
									),
									Expanded(
										flex: 1,
										child: Container(
											margin: EdgeInsets.only(left: 16, right: 22),
											child: Text(
												"Do you have A Difficulty Breathing?",
												textAlign: TextAlign.left,
												style: TextStyle(
													color: AppColors.primaryText,
													fontFamily: "Roboto",
													fontWeight: FontWeight.w400,
													fontSize: 16,
												),
											),
										),
									),
									Container(
										width: 51,
										height: 31,
										child: Switch.adaptive(
											value: false,
											inactiveTrackColor: Color.fromARGB(60, 0, 0, 0),
											onChanged: (value) {
											
											},
											activeColor: AppColors.primaryElement,
											activeTrackColor: AppColors.primaryElement,
										),
									),
								],
							),
						),
						Spacer(),
						Align(
							alignment: Alignment.topCenter,
							child: Container(
								width: 330,
								height: 50,
								margin: EdgeInsets.only(bottom: 5),
								child: FlatButton(
									onPressed: () => this.onCallButtonPressed(context),
									color: AppColors.primaryElement,
									shape: RoundedRectangleBorder(
										borderRadius: BorderRadius.all(Radius.circular(24)),
									),
									textColor: Color.fromARGB(255, 255, 255, 255),
									padding: EdgeInsets.all(0),
									child: Text(
										"Call: 0800 100 100",
										textAlign: TextAlign.center,
										style: TextStyle(
											color: Color.fromARGB(255, 255, 255, 255),
											fontFamily: "Roboto",
											fontWeight: FontWeight.w700,
											fontSize: 12,
										),
									),
								),
							),
						),
						Container(
							margin: EdgeInsets.only(left: 44, right: 42, bottom: 61),
							child: Text(
								"By Pressing This Button We Your Are Accepting Terms of Service\nand That You Have Answered The Questions Truthfuly",
								textAlign: TextAlign.center,
								style: TextStyle(
									color: AppColors.secondaryText,
									fontFamily: "Arial",
									fontWeight: FontWeight.w400,
									fontSize: 10,
									height: 1.8,
								),
							),
						),
					],
				),
			),
		);
	}
}