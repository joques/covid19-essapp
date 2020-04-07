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

  //Chart info setup and configuration for chart
  suspectedList: number[] = new Array<number>();
  confirmedList: number[] = new Array<number>();
  deadList: number[] = new Array<number>();
  recoveredList: number[] = new Array<number>();
  regionsNames: string[] = new Array<string>();
  isLoaded: boolean = false;
  public chartType: string = 'bar';
  public chartDatasets: Array<any> = [
    { data: this.suspectedList, label: 'Suspected' },
    { data: this.confirmedList, label: 'Confirmed' },
    { data: this.recoveredList, label: 'Recovered' },
    { data: this.deadList, label: 'Deaths' }
  ];

  public chartLabels: Array<any> = this.regionsNames;

  public chartColors: Array<any> = [
    {
      backgroundColor: this.getColor('orange'),
      borderColor: this.getColor('orange'),
      borderWidth: 2,
    },
    {
      backgroundColor: this.getColor('blue'),
      borderColor: this.getColor('blue'),
      borderWidth: 1,
    },
    {
      backgroundColor: this.getColor('green'),
      borderColor: this.getColor('green'),
      borderWidth: 1,
    },
    {
      backgroundColor: this.getColor('red'),
      borderColor: this.getColor('red'),
      borderWidth: 1,
    }
  ];

  public chartOptions: any = {
    responsive: true,
    title: {
      display: true,
      text: 'COVID-19 Namibia Regional Data',
      position:'top',
      fontSize: 22,
      fontfamily:"'Arial', 'Helvetica', 'sans-serif'"
  }
  };


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
      this.updated = new Date(this.stat_data[this.stat_data.length - 1]['date']);
      console.log(this.stat_data[this.stat_data.length - 1]['recovered']);
      this.startCounter();
    });

    //chart info from service
    this.http.getRegionalData().subscribe((res) => {

      const regions = JSON.parse(JSON.stringify(res)).regions;

      Object.keys(regions).forEach(key => {
        this.regionsNames.push(key.toLocaleUpperCase());
        this.suspectedList.push(regions[key].suspected);
        this.confirmedList.push(regions[key].confirmed);
        this.deadList.push(regions[key].dead);
        this.recoveredList.push(regions[key].recovered);
        console.log(regions[key]);

      });
      this.isLoaded = true;
    });







  }


  startCounter() {

    let Count = 0;
    //let max = Math.max(data[0].suspected,data[0].confirmed,data[0].dead,data[0].recovered);
    let theLoop: (i: number, type: string, first: boolean) => void = (i: number, type: string, first: boolean) => {
      if (first === true) {
        console.log('Here Count ..');
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
          if (type === 'suspected') {
            this.suspectedCount++;
          } else if (type === 'confirmed') {
            this.confirmedCount++;
          } else if (type === 'death') {
            this.deathCount++;
          } else if (type === 'recovered') {
            this.recoveredCount++;
          }

          //console.log(i+"=>"+this.suspectedCount)
        }
      }, 5);
    };
    var length = Object.keys(this.stat_data).length;
    console.log('ALL items =>' + length);
    theLoop(Number.parseInt(this.stat_data[length - 1]['suspected']), 'suspected', true);
    theLoop(Number.parseInt(this.stat_data[length - 1]['dead']), 'death', true);
    theLoop(Number.parseInt(this.stat_data[length - 1]['confirmed']), 'confirmed', true);
    theLoop(Number.parseInt(this.stat_data[length - 1]['recovered']), 'recovered', true);
  }

  drawMark(): void {

  }

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
        };
        this.selected = value;
      }
    });
  }

  
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  getColor(color: string) {
    const colorList = new Array<string>(14);
    for (let i = 0; i < colorList.length; i++) {
      colorList[i] = color;

    }
    return colorList;
  }
}
