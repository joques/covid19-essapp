import 'package:advance_pdf_viewer/advance_pdf_viewer.dart';
import 'package:covid_19_app/data/packages.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class DocumentScreen extends StatefulWidget {
  final String title;
  final PDFDocument document;

  DocumentScreen({Key key, this.title, this.document}) : super(key: key);

  @override
  _DocumentScreenState createState() => _DocumentScreenState();
}

class _DocumentScreenState extends State<DocumentScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(
            widget.title,
          ),
          centerTitle: true,
        ),
        body: PDFViewer(
          document: widget.document,
        ));
  }
}
