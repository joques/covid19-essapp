import { Component, OnInit } from '@angular/core';
import { CoronaWhatisService } from 'src/app/services/corona-whatis.service';
import { StatisticModel } from 'src/app/models/statistic.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  confirmedCount: number = 0;
  deathCount: number = 0;
  recoveredCount: number = 0;
  testedCount: number = 0;
  activeCount: number = 0;
  date: Date;
  
  constructor( private http: CoronaWhatisService) { }

  ngOnInit(): void {
    this.getStats();
  }
  
  scroll($element: HTMLElement): void {
    // $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  /**
   * @name getStats()
   * @description gets COVID19 stats from the API and assigns data to respective arrays
   * @returns void
   */
  getStats = (): void => {
    this.http.getStats().subscribe((data: Array<StatisticModel>) => {

      console.log("Home Statistics.. ", data);
      // Extract the most recent statistic
      const mostRecentData = data.reduce((a, b) => {
        return new Date(a.date) > new Date(b.date) ? a : b;
      });
      // Assign to respective arrays
      this.activeCount = mostRecentData['active_cases'];
      this.confirmedCount = mostRecentData['confirmed'];
      this.recoveredCount = mostRecentData['recovered'];
      this.testedCount = mostRecentData['total_tested'];
      this.deathCount = mostRecentData['dead'];
      this.date = mostRecentData['date'];

    },console.error);
  }

}
