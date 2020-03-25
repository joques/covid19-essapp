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
  data = [];

  selected = {
    recovered: 0,
    dead: 0,
    suspected: 0,
    confirmed: 0,
    worldwide: 0
  };

  constructor(
    private service: HttpserviceService
  ) { }

  ngOnInit(): void {
    // get the data from the api
    this.service.getPeriodicStats()
      .subscribe(res =>
        res.forEach(data => {
          let date = `${new Date(data.date).getMonth()}/${new Date(data.date).getDate()}/${new Date(data.date).getFullYear()}`;
          if (date === new Date().toLocaleDateString()) {
            this.datenow = date;
          }
          let value = {
            date: date,
            recovered: data.recovered,
            dead: data.dead,
            suspected: data.suspected,
            confirmed: data.confirmed,
            worldwide: data.worldwide
          }
          this.data.push(value);
        })
      );
  }

  // draw a marker on the map
  onMapClick(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.chosenLocation = true;
  }

  // method that will populate the selected object and update the badges on the html page
  select(date) {
    this.data.forEach(data => {
      if (data.date === date) {
        let value = {
          recovered: data.recovered,
          dead: data.dead,
          suspected: data.suspected,
          confirmed: data.confirmed,
          worldwide: data.worldwide
        }
        this.selected = value;
      }
    })
  }
}
