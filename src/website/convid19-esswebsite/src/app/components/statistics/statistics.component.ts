import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from 'src/app/services/httpservice.service';
import { SelectionModel } from '@angular/cdk/collections';
import { localeData } from 'moment';
import { CoronaWhatisService } from 'src/app/services/corona-whatis.service';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  suspectedCount: number = 0;
  confirmedCount: number = 0;
  deathCount: number = 0;
  recoveredCount: number = 0;
  updated: Date = new Date();

  places = [
    {
      lat: -22.575224324350007,
      lng: 17.08553119601639
    }, {
      lat: -23.920876916085312,
      lng: 18.06606098117264

    }, {
      lat: -22.64675073724474,
      lng: 14.595686021333671
    }, {
      lat: -20.489839878217655,
      lng: 16.67759520102117
    }, {
      lat: -22.442920657272868,
      lng: 18.5031611607708
    }, {
      lat: -23.920876916085312,
      lng: 18.06606098117264
    }
  ];

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

  recovered: string;
  dead: string;
  suspected: string;
  confirmed: string;
  worldwide: string;

  localData = JSON;
  localValue = [];
  dataString: string;
  stat_data = [];

  constructor(
    private http: CoronaWhatisService
  ) { }

  ngOnInit(): void {
    this.suspectedCount = 0;
    this.datenow = new Date().toLocaleDateString();

    console.log('We are here home 1mmmI ');
    this.http.getStats().subscribe((data: []) => {
      // this.http.getWhatIsInfo().subscribe((data) => {
      console.log('We are here after request');
      console.log(data);

      this.stat_data = data;
      console.log('Starts');

      console.log('i am in home NEWWWWW');

      console.log(this.stat_data[this.stat_data.length - 1]['date'].toString());
      console.log(this.stat_data[this.stat_data.length - 1]['recovered']);
      this.startCounter();
    });





   


  }


  // draw a marker on the map
  onMapClick(event): void {
    // if (event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.chosenLocation = true;
    // }

    // this.places.forEach(coords => {this.latitude = coords.lat; this.longitude = coords.lng})

  };

  startCounter() {

    let Count = 0;
    //let max = Math.max(data[0].suspected,data[0].confirmed,data[0].dead,data[0].recovered);
    let theLoop: (i: number, type: string, first: boolean) => void = (i: number, type: string, first: boolean) => {
      if (first === true) {
        console.log("Here Count ..");
        this.suspectedCount = 0;
        this.confirmedCount = 0;
        this.recoveredCount = 0;
        this.deathCount = 0;
      }
      console.log(i.toString());
      setTimeout(() => {
        //metronome.play();
        if (i > 0) {
          theLoop(--i, type, false);
          if (type === "suspected") {
            this.suspectedCount++;
          } else if (type === "confirmed") {
            this.confirmedCount++;
          } else if (type === "death") {
            this.deathCount++;
          } else if (type === "recovered") {
            this.recoveredCount++;
          }

          //console.log(i+"=>"+this.suspectedCount)
        }
      }, 5);
    };
    var length = Object.keys(this.stat_data).length;
    console.log("ALL items =>" + length);
    theLoop(Number.parseInt(this.stat_data[length - 1]['suspected']), "suspected", true);
    theLoop(Number.parseInt(this.stat_data[length - 1]['dead']), "death", true);
    theLoop(Number.parseInt(this.stat_data[length - 1]['confirmed']), "confirmed", true);
    theLoop(Number.parseInt(this.stat_data[length - 1]['recovered']), "recovered", true);
  }

  drawMark(): void {

  };

  // method that will populate the selected object and update the badges on the html page
  select(date): void {
    this.data.forEach(data => {
      if (data.date === date) {
        let value = {
          recovered: data.recovered,
          dead: data.dead,
          suspected: parseInt(data.suspected),
          confirmed: data.confirmed,
          worldwide: data.worldwide
        }
        this.selected = value;
      }
    })
  };
}
