import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datenow: string;
  data = [];
  localData = JSON;
  localValue = [];
  dataString: string;
  

  selected = {
    recovered: 0,
    dead: 0,
    suspected: 0,
    confirmed: 0,
    worldwide: 0
  };
  constructor(private service: HttpserviceService) { }

  ngOnInit(): void {
    console.log("i am in home");
    this.datenow = new Date().toLocaleDateString();
    // get the data from the api
    this.service.getPeriodicStats()
      .subscribe(res =>
        res.forEach((data, i) => {
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

          //pushing values to the data array
          this.selected = value;

          // summing up all the values
          // let newval = {
          //   recovered: +(this.data[i].recovered += this.data[i].recovered),
          //   dead: +(this.data[i].dead += this.data[i].dead),
          //   suspected: +(this.data[i].suspected += this.data[i].suspected),
          //   confirmed: +(this.data[i].confirmed += this.data[i].confirmed),
          //   worldwide: +(this.data[i].worldwide += this.data[i].worldwide)
          // }

          // //assinging it to the selected object
          // this.selected = newval;
        })
      );

    for (let i: number = 0; i < this.data.length; i++) {
      let value = {
        recovered: this.data[i].recovered += this.data[i].recovered,
        dead: this.data[i].dead += this.data[i].dead,
        suspected: this.data[i].suspected += this.data[i].suspected,
        confirmed: this.data[i].confirmed += this.data[i].confirmed,
        worldwide: this.data[i].worldwide += this.data[i].worldwide
      }

      this.selected = value;
      localStorage.setItem('data', JSON.stringify(value));

      console.log(value);
      this.dataString = localStorage.getItem('data');
      // retrieving our data and converting it back into an array
      this.localData = JSON.parse(this.dataString);
      console.log("i am in home");
     
    console.log(this.localData);
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
