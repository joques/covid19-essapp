import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-circulars-all',
  templateUrl: './circulars-all.component.html',
  styleUrls: ['./circulars-all.component.css']
})
export class CircularsAllComponent implements OnInit {


  public circulars = [];
  public id
  constructor(private route: ActivatedRoute, private http: HttpserviceService) { }

  ngOnInit(): void {
    var t = JSON.parse(localStorage.getItem('memos'))
    this.id = this.route.snapshot.paramMap.get('id');

    t.forEach(data => {

      if(data.classification == this.id ){
        this.circulars = data.docs
      }
    })
  }

  download(docid: string): void {
    console.log(docid);
    this.http.downloadCirculars(docid);
  }
}

