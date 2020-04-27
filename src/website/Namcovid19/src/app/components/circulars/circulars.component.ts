import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-circulars',
  templateUrl: './circulars.component.html',
  styleUrls: ['./circulars.component.css']
})
export class CircularsComponent implements OnInit {

  constructor(private http: HttpserviceService) { }

  public circulars = [];
  classifications = new Set(); //set of unique classifications

  ngOnInit(): void {

    this.http.getCirculars().subscribe((res: any[]) => {
      res.forEach(data => {
        //gets each document's classification and creates a unique set of classes
        this.classifications.add(data.classification)
        this.circulars.push(data);

      })

      localStorage.setItem('memos', JSON.stringify(this.circulars))
    });

  }

  download(docid: string): void {
    console.log(docid);
    console.log('im here');
    this.http.downloadCirculars(docid);
  }

}
