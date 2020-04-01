import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from 'src/app/services/httpservice.service';
import { CoronaWhatisService } from 'src/app/services/corona-whatis.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datenow: string;
  data = [];
  localData: JSON;
  localValue = [];
  dataString: string;


  selected = {
    recovered: 0,
    dead: 0,
    suspected: 0,
    confirmed: 0,
    worldwide: 0
  };
  Statistics = [];
  constructor(private service: HttpserviceService, private http: CoronaWhatisService) { }

  ngOnInit(): void {

    console.log('We are here home 1mmmI ');
    this.http.getStats().subscribe((data: []) => {
      // this.http.getWhatIsInfo().subscribe((data) => {
      console.log('We are here after request');
      console.log(data);
      this.Statistics = data;
      console.log('Starts');
      localStorage.setItem('data', JSON.stringify(this.Statistics));

      console.log(this.Statistics);
      this.dataString = localStorage.getItem('data');
      // retrieving our data and converting it back into an array
      this.localData = JSON.parse(this.dataString);
      console.log('i am in home NEWWWWW');
       
      console.log(this.localData[this.data.length-1]['date'].toString());
      console.log(this.localData[this.data.length-1]['recovered']);
    });
    // console.log("i am in home");
    // this.datenow = new Date().toLocaleDateString();
    // // get the data from the api
    // this.service.getPeriodicStats()
    //   .subscribe(res =>
    //     res.forEach((data, i) => {
    //       let date = `${new Date(data.date).getMonth()}/${new Date(data.date).getDate()}/${new Date(data.date).getFullYear()}`;
    //       if (date === new Date().toLocaleDateString()) {
    //         this.datenow = date;
    //       }
    //       console.log("i am in home 44");
    //       let value = {
    //         date: data.date,
    //         recovered: data.recovered,
    //         dead: data.dead,
    //         suspected: data.suspected,
    //         confirmed: data.confirmed,
    //         worldwide: data.worldwide
    //       }

    //       //pushing values to the data array
    //       this.selected = value;
    //       console.log("i am in home 2");

    // //assinging it to the selected object
    // this.selected = newval;


    for (let i: number = 0; i < this.data.length; i++) {
      let value = {
        recovered: this.data[i].recovered += this.data[i].recovered,
        dead: this.data[i].dead += this.data[i].dead,
        suspected: this.data[i].suspected += this.data[i].suspected,
        confirmed: this.data[i].confirmed += this.data[i].confirmed,
        worldwide: this.data[i].worldwide += this.data[i].worldwide
      }


    }
  }


  // // draw a marker on the map
  // onMapClick(event): void {
  //   // if (event) {
  //   this.latitude = event.coords.lat;
  //   this.longitude = event.coords.lng;
  //   this.chosenLocation = true;
  //   // }

  //   // this.places.forEach(coords => {this.latitude = coords.lat; this.longitude = coords.lng})

  // };

  // drawMark(): void {

  // };

  // // method that will populate the selected object and update the badges on the html page
  // select(date): void {
  //   this.data.forEach(data => {
  //     if (data.date === date) {
  //       let value = {
  //         recovered: data.recovered,
  //         dead: data.dead,
  //         suspected: data.suspected,
  //         confirmed: data.confirmed,
  //         worldwide: data.worldwide
  //       }
  //       this.selected = value;
  //     }
  //   })
  // };
  // }

  scroll($element: HTMLElement): void {
    // $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
