import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {
  showprogress: boolean;

  constructor() { }

  ngOnInit(): void {
    this.showprogress = true;
    // this.coronaService.getSymptoms().subscribe((data: []) => {

    //   console.log('We are here 9999');
    //   console.log(data);
    //   this.Symptoms = data;
    // });

    setTimeout(() => {
      this.showprogress = false;
    }, 2000);
  }

}
