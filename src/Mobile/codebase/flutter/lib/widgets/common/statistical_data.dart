class Latest {
  final String id;
  final String date;
  final String recovered;
  final String dead;
  final String suspected;
  final String confirmed;
  final String worldwide;

  Latest({this.id,this.date,this.recovered, this.dead, this.suspected,this.confirmed,this.worldwide});

  factory Latest.fromJson(Map<String, dynamic> json) {
    return Latest(
      id:json['_id'].toString(),
      date:json['date'].toString(),
      recovered: json['recovered'].toString(),
      dead: json['dead'].toString(),
      suspected: json['suspected'].toString(),
      confirmed: json['confirmed'].toString(),
      worldwide: json['worldwide'].toString(),
    );
  }
}