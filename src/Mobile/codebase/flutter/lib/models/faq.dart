class FAQ {
  String id;
  String question;
  String answer;

  FAQ(this.id, this.question, this.answer);

  FAQ.map(dynamic json) {
    this.id = json["_id"]['oid'];
    this.question = json["question"];
    this.answer = json["answer"];
  }

  Map<String, dynamic> toMap() {
    var map = new Map<String, dynamic>();
    map["id"] = id;
    map["question"] = question;
    map["answer"] = answer;
    return map;
  }
}
