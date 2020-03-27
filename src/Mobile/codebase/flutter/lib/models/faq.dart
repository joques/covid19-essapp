class FAQ {
  String question;
  String answer;

  FAQ(this.question, this.answer);

  FAQ.map(dynamic json) {
    this.question = json["question"];
    this.answer = json["answer"];
  }

  Map<String, dynamic> toMap() {
    var map = new Map<String, dynamic>();
    map["question"] = question;
    map["answer"] = answer;
    return map;
  }
}
