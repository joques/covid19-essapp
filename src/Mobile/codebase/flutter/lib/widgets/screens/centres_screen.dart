import 'dart:async';

import 'package:covid_19_app/data/api.dart';
import 'package:covid_19_app/models/centre.dart';
import 'package:covid_19_app/widgets/common/nav_drawer.dart';
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
  Set<Marker> markers = Set();
  @override
  void initState() {
    super.initState();
    setCentrePin();
    fetchCentres();
  }

  fetchCentres() {
    API()
        .getCentres()
        .then((list) => setState(() {
              _centres = list;
              list.forEach((centre) => markers.add(Marker(
                  position: centre.coordinates,
                  icon: BitmapDescriptor.defaultMarkerWithHue(
                      BitmapDescriptor.hueBlue),
                  infoWindow:
                      InfoWindow(title: centre.name, snippet: centre.about),
                  markerId: MarkerId(centre.name))));
            }))
        .catchError((err) {
      debugPrint(err.toString());
    });
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
    return new Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
        centerTitle: true,
      ),
      drawer: NavDrawer(),
      body: GoogleMap(
        initialCameraPosition: _namibia,
        onMapCreated: _onMapCreated,
        mapType: MapType.normal,
        markers: markers,
      ),
    );
  }
}
