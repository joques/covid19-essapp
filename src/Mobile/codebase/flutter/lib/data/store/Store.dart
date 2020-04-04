import 'dart:io';

import 'package:covid_19_app/data/packages.dart';
import 'package:covid_19_app/data/store/common.dart';
import 'package:path/path.dart';
import 'package:path_provider/path_provider.dart';
import 'package:sqflite/sqflite.dart';

class Store {
  final _dbVersion = 1;
  final String dbName = 'covid19.app.db';

  // make it a singleton
  Store._();

  static final Store instance = Store._();

  // Only allow a single open connection to the database.
  static Database _database;

  Future<Database> get database async {
    if (_database != null) return _database;
    _database = await _initDatabase();
    return _database;
  }

  // open the database
  _initDatabase() async {
    // The path_provider plugin gets the right directory for Android or iOS.
    Directory documentsDirectory = await getApplicationDocumentsDirectory();
    String path = join(documentsDirectory.path, dbName);
    // Open the database. Can also add an onUpdate callback parameter.
    return await openDatabase(path, version: _dbVersion, onCreate: _onCreate);
  }

  Future _onCreate(Database db, int version) async {
    await db.execute(
        createCentresTable + ' ' + createStatsTable + ' ' + createFaqsTable);

    ///updateSchedule();
  }

  /// insert a centre
  Future<int> saveCentre(Centre centre) async {
    Database db = await database;
    int id = await db.insert(tableCentres, centre.toMap());
    return id;
  }

  /// insert a statistic
  Future<int> saveStatistic(Statistic statistic) async {
    Database db = await database;
    int id = await db.insert(tableStatistics, statistic.toMap());
    return id;
  }

  /// insert a faqs
  Future<int> saveFaq(FAQ faq) async {
    Database db = await database;
    int id = await db.insert(tableFaq, faq.toMap());
    return id;
  }

  /// gets
  /// Centres
  Future<List<Centre>> getCentres() async {
    List<Centre> _centres = List();
    Database db = await database;

    await db.query(tableCentres).then((rows) {
      debugPrint(rows.length.toString() + ' centres returned from db');

      for (var row in rows) {
        Centre _centre = Centre.map(row);
        _centres.add(_centre);
      }
    }).catchError((error) {
      debugPrint(error);
    });

    return _centres;
  }

  /// gets
  /// Centres
  Future<List<FAQ>> getFaqs() async {
    List<FAQ> _faqs = List();
    Database db = await database;

    await db.query(tableFaq).then((rows) {
      debugPrint(rows.length.toString() + ' faqs returned from db');

      for (var row in rows) {
        FAQ _faq = FAQ.map(row);
        _faqs.add(_faq);
      }
    }).catchError((error) {
      debugPrint(error);
    });

    return _faqs;
  }
}
