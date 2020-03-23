import { Component, OnInit } from '@angular/core';
import { CoronaWhatisService } from 'src/app/services/corona-whatis.service';

@Component({
  selector: 'app-corona-whatis',
  templateUrl: './corona-whatis.component.html',
  styleUrls: ['./corona-whatis.component.css']
})
export class CoronaWhatisComponent implements OnInit {
  coronaInfo = [];
  coronaService: any;

  constructor(coronaService: CoronaWhatisService) { }

  ngOnInit(): void {
    this.coronaService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.coronaInfo = data;
    });
  }

}
