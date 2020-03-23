import { Component, OnInit } from '@angular/core';
import { CoronaWhatisService } from 'src/app/services/corona-whatis.service';

@Component({
  selector: 'app-corona-whatis',
  templateUrl: './corona-whatis.component.html',
  styleUrls: ['./corona-whatis.component.css']
})
export class CoronaWhatisComponent implements OnInit {
  coronaInfo = [];


  constructor(private coronaService: CoronaWhatisService) { }

  ngOnInit(): void {
    console.log('We are here');
    this.coronaService.sendGetRequest().subscribe((data: any[]) => {
      console.log('We are here 9999');
      console.log(data);
      this.coronaInfo = data;
    });
  }

}
