import { Component, OnInit } from '@angular/core';
import { CoronaWhatisService } from 'src/app/services/corona-whatis.service';


@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {
  News = [];
  constructor(private coronaService: CoronaWhatisService) { }

  ngOnInit(): void {
    console.log('We are here: latest news');
    this.coronaService.getTips().subscribe((data: []) => {
      // this.http.getWhatIsInfo().subscribe((data) => {
      console.log('We are here news');
      console.log(data);
      this.News = data;
    });
  }

}
