class Memo {
  String docid;
  String title;
  String pubdate;
  String author;
  String source;

  Memo(this.docid, this.title,this.author,this.pubdate,this.source);

  Memo.map(dynamic json) {
    this.docid = json["docid"];
    this.title = json["title"];
    this.pubdate = json["pubdate"];
    this.author = json["author"];
    this.source = json["source"];
  }

  Map<String, dynamic> toMap() {
    var map = new Map<String, dynamic>();
    map["docid"] = docid;
    map["title"] = title;
    map["pubdate"] = pubdate;
    map["author"] = author;
    map["source"] = source;
    return map;
  }
}
