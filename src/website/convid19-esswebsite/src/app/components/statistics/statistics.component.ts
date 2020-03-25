import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  latitude = -22.967062;

  longitude = 18.4929993;
  chosenLocation = false;
  datenow: string;
  constructor(
    private service: HttpserviceService
  ) { }

  ngOnInit(): void {
    this.datenow = new Date().toLocaleString();
    this.service.getPeriodicStats()
      .subscribe(res => console.log(res))
  }

  onMapClick(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.chosenLocation = true;

  }

}
