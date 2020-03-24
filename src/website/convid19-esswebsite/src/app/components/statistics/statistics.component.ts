import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  latitude = -22.5628;

  longitude = 17.0746;
  chosenLocation = true;
  datenow: string;
  constructor() { }

  ngOnInit(): void {
    this.datenow = new Date().toLocaleString();
  }

  onMapClick(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.chosenLocation = true;

  }

}
