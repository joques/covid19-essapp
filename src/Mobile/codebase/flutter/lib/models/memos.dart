class Memo {
  String docid;
  String title;
  String pubdate;
  String author;
  String source;
  String docurl;

  Memo(this.docid, this.title,this.author,this.pubdate,this.source,this.docurl);

  Memo.map(dynamic json) {
    this.docid = json["docid"];
    this.title = json["title"];
    this.pubdate = json["pubdate"];
    this.author = json["author"];
    this.source = json["source"];
    this.docurl = json["docurl"];

  }

  Map<String, dynamic> toMap() {
    var map = new Map<String, dynamic>();
    map["docid"] = docid;
    map["title"] = title;
    map["pubdate"] = pubdate;
    map["author"] = author;
    map["source"] = source;
    map["docurl"] = docurl;
    return map;
  }
}
