import 'package:covid_19_app/data/packages.dart';

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
//      drawer: NavDrawer(),
        body: Padding(
          padding: EdgeInsets.all(
            15.0,
          ),
          child: SingleChildScrollView(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Container(
                  child: GoogleMap(
                    initialCameraPosition: _namibia,
                    onMapCreated: _onMapCreated,
                    mapType: MapType.normal,
                    markers: markers,
                    mapToolbarEnabled: true,
                    myLocationButtonEnabled: true,
                  ),
                  height: 300,
                ),
                Divider(),
                Container(
                  margin: EdgeInsets.all(
                    4.0,
                  ),
                  child: Text(
                    'List of centres',
                    style: Theme.of(context).textTheme.headline.copyWith(
                        color: AppColors.primaryElement,
                        fontWeight: FontWeight.w700,
                        fontSize: 16),
                  ),
                ),
                Container(
                  height: 500,
                  child: ListView.builder(
                    itemCount: _centres.length,
                    itemBuilder: (BuildContext ctxt, int index) {
                      return Card(
                        shape: BeveledRectangleBorder(
                            borderRadius: BorderRadius.only(
                                bottomRight: Radius.circular(16))),
                        color: Theme.of(context).dialogBackgroundColor,
                        clipBehavior: Clip.antiAlias,
                        child: Padding(
                          padding: EdgeInsets.all(
                            15.0,
                          ),
                          child: ListTile(
                            isThreeLine: true,
                            title: Container(
                              margin: EdgeInsets.only(bottom: 5.0),
                              child: AutoSizeText(
                                _centres[index].name,
                                style: Theme.of(context)
                                    .textTheme
                                    .headline
                                    .copyWith(
                                      color: AppColors.primaryElement,
                                      fontWeight: FontWeight.w800,
                                      fontSize: 18,
                                    ),
                              ),
                            ),
                            subtitle: AutoSizeText(
                              _centres[index].about,
                              softWrap: true,
                              maxLines: 5,
                              overflow: TextOverflow.ellipsis,
                              style: Theme.of(context).textTheme.body1.copyWith(
                                    fontWeight: FontWeight.w400,
                                    fontSize: 16,
                                    color: AppColors.secondaryText,
                                  ),
                            ),
                            leading: Icon(
                              LineIcons.hospital_o,
                              size: 40.0,
                            ),
                          ),
                        ),
                      );
                    },
                  ),
                )
              ],
            ),
          ),
        ));
  }
}
