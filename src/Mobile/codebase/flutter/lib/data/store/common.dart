// tables
final tableCentres = 'centres';
final tableStatistics = 'statistics';
final tableFaq = 'faqs';
final tableNews = 'news';

// columns
final colId = 'id';

// centres
final colName = 'name';
final colAbout = 'about';
final colLat = 'lat';
final colLng = 'lng';

// faqs
final colQuestion = 'question';
final colAnswer = 'answer';

// faqs
final colSuspected = 'suspected';
final colConfirmed = 'confirmed';
final colDead = 'dead';
final colRecovered = 'recoverd';
final colTimestamp = 'recoverd';
final colRegion = 'region';

// Create table queries
final createCentresTable = '''CREATE TABLE $tableCentres (
                $colId INTEGER PRIMARY KEY,
                $colName TEXT NOT NULL,
                $colAbout TEXT NOT NULL,
                $colLat REAL NOT NULL,
                $colLng REAL NOT NULL
              );''';

final createFaqsTable = '''CREATE TABLE $tableFaq (
                $colId INTEGER PRIMARY KEY,
                $colQuestion TEXT NOT NULL,
                $colAnswer TEXT NOT NULL,
              );''';

final createStatsTable = '''CREATE TABLE $tableStatistics (
                $colId INTEGER PRIMARY KEY,
                $colSuspected INTEGER NOT NULL,
                $colConfirmed INTEGER NOT NULL,
                $colRecovered INTEGER NOT NULL,
                $colDead INTEGER NOT NULL,
                $colTimestamp TEXT NOT NULL,
              );''';
