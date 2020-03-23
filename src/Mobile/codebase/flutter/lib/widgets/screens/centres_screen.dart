import 'dart:async';

import 'package:covid_19_app/models/Centre.dart';
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';

class CentresScreen extends StatefulWidget {
  final String title;
  CentresScreen({Key key, this.title}) : super(key: key);

  @override
  _CentresScreenState createState() => _CentresScreenState();
}

class _CentresScreenState extends State<CentresScreen> {
  Completer<GoogleMapController> _controller = Completer();
  GoogleMapController mapController;

  BitmapDescriptor pinCentreIcon;

  void setCentrePin() async {
    pinCentreIcon = await BitmapDescriptor.fromAssetImage(
        ImageConfiguration(devicePixelRatio: 2.5),
        'assets/images/markers/marker4.png');
  }

  List<Centre> _centres = List();

  @override
  void initState() {
    super.initState();
    setCentrePin();
  }

  void _onMapCreated(GoogleMapController controller) {
    setState(() {
      mapController = controller;
    });
  }

  static final CameraPosition _namibia = CameraPosition(
      //bearing: 192.8334901395799,
      target: LatLng(-22.5666618, 17.0777174),
      tilt: 59.440717697143555,
      zoom: 6);
  @override
  @override
  Widget build(BuildContext context) {
    _centres.add(Centre(
        name: 'Lady Pohamba Private Hospital',
        about: 'Private hospital',
        coordinates: LatLng(-22.6220078, 17.0930451)));
    _centres.add(Centre(
        name: 'Katutura State Hospital',
        about: 'Public hospital',
        coordinates: LatLng(-22.5346763, 17.0624753)));
    _centres.add(Centre(
        name: 'Robert Mugabe Clinic',
        about: 'Public clinic',
        coordinates: LatLng(-22.578527, 17.0637647)));
    _centres.add(Centre(
        name: 'Hakahana Clinic',
        about: 'Public clinic',
        coordinates: LatLng(-22.5969382, 17.0463872)));
    _centres.add(Centre(
        name: 'Oshakati State Hospital',
        about: 'Public Hospital',
        coordinates: LatLng(-17.7885692, 15.7045121)));

    Set<Marker> markers = Set();
    _centres.forEach((centre) => markers.add(Marker(
        position: centre.coordinates,
        icon: BitmapDescriptor.defaultMarkerWithHue(BitmapDescriptor.hueBlue),
        infoWindow: InfoWindow(title: centre.name, snippet: centre.about),
        markerId: MarkerId(centre.name))));

    return new Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
        centerTitle: true,
      ),
      body: GoogleMap(
        initialCameraPosition: _namibia,
        onMapCreated: _onMapCreated,
        mapType: MapType.normal,
        markers: markers,
      ),
    );
  }
}
