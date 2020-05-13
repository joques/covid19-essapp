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
  max_docs: Number

  ngOnInit(): void {
    this.calc_max_docs()

    this.http.getCirculars().subscribe((res: any[]) => {
      res.forEach(data => {

        var exist = false
        var index

        for (var i = 0; i < this.circulars.length; i++) {
          if (this.circulars[i].classification == data.classification) {
            exist = true
            index = i
            break;
          }
        }

        if (exist) {
          this.circulars[index].docs.push(data)
        } else {
          this.circulars.push({
            classification: data.classification,
            docs: [data]
          })
        }
      })

      localStorage.setItem('memos', JSON.stringify(this.circulars))
    });

    // this.circulars = JSON.parse(localStorage.getItem('memos'))

  }

  download(docid: string): void {
    this.http.downloadCirculars(docid);
  }

  calc_max_docs() {
    var w = document.getElementById('classifications-container').offsetWidth
    if (window.screen.width < 768)
      this.max_docs = 4
    else if (window.screen.width > 768)
      this.max_docs = Math.floor(w / 200)
  }


}
