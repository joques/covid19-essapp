import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corona-general-info',
  templateUrl: './corona-general-info.component.html',
  styleUrls: ['./corona-general-info.component.css']
})
export class CoronaGeneralInfoComponent implements OnInit {
  showprogress: boolean;

  constructor() { }

  ngOnInit(): void {
    this.showprogress = true;

    setTimeout(() => {
      this.showprogress = false;
    }, 3000);
  }

}
