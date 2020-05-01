import { Component, OnInit } from '@angular/core';
import { CoronaWhatisService } from 'src/app/services/corona-whatis.service';
import { SocketService } from 'src/app/services/socket.io.service';
import * as moment from 'moment';
import { NewsModel } from 'src/app/models/news.model';


@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {
  News : Array<NewsModel> = [];
  latestNews : Array<NewsModel> = [];

  constructor(
    private coronaService: CoronaWhatisService,
    private socketService: SocketService
  ) {
  }

  ngOnInit(): void {
    console.log('Fetching & Listening for News');
    // Initiate Socket service
    this.connectAndSubscribe();

    this.coronaService.getLatestNews().subscribe((data: []) => {

      console.log("Fetched News: ", data);
      //Mapping News and adding news property
      this.News = this.mapNews(data);
      console.log("Mapped News: ", this.News);
    });
  }


  /**
   * @name mapNews
   * @description Maps news array and converts it to the news model
   * @param {Array<String>} news news array from the API
   * @returns {Array<NewsModel>} mapped news model array
   */
  mapNews = (news: Array<String>): Array<NewsModel> => {
    const mappedNews = news.map(newsString => {
      return {
        date : moment().format("dddd, MMMM Do YYYY, h:mm:ss a").toString(),
        news: newsString
      };
    });
    return mappedNews;
  }

  /**
   * @name connectAndSubscribe
   * @description uses socketService to connect and subscribe to the subject from the api
   */
  public connectAndSubscribe() {
    console.log("Connecting to news Websocket..");
    this.socketService.connect().subscribe(subject => {
      console.log("Socket: ", subject);
      console.log("Socket Data: ", subject);
      const newsObj = {
        news: subject.data,
        date: moment.now().toString()
      }
      localStorage.setItem('newsObj', JSON.stringify(subject));
      localStorage.setItem('latestNews',JSON.stringify(newsObj));
      localStorage.setItem(newsObj.date,JSON.stringify(newsObj));

    }, error => console.log("Socket Error: ", error));
  }
}
