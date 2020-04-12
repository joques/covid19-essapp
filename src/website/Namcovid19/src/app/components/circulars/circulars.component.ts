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
  public circulars = [];
memo = [];
  ngOnInit(): void {

    this.http.getCirculars().subscribe((res : any[])=>{
      console.log(res);
      res.forEach(data => {
        this.data = res as string [];
        this.circulars.push(res);
        localStorage.setItem('memos', JSON.stringify(this.circulars[0]));
        // console.log(res[1]);
      })

  });
  
  const memos = JSON.parse(localStorage.getItem('memos'));

  }

download(docid: string):  void {
  console.log(docid);
  console.log('im here');
    this.http.downloadCirculars(docid);
  }

}
