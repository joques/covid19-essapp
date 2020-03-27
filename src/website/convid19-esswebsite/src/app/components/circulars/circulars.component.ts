import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-circulars',
  templateUrl: './circulars.component.html',
  styleUrls: ['./circulars.component.css']
})
export class CircularsComponent implements OnInit {

  constructor(private http: HttpserviceService) { }

  data = [];

  ngOnInit(): void {

    this.http.getCirculars()
      .subscribe(res =>
        res.forEach(data => {

          let value = {

            id: data.docid,
            title: data.title,
            pubdate: data.pubdate,
            author: data.author,
            source: data.source
          }
          this.data.push(value);
        })
      );
  }

}
