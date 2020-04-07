import { Component, OnInit } from '@angular/core';
import { CoronaWhatisService } from 'src/app/services/corona-whatis.service';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {
  Symptoms = [];

  constructor(private coronaService: CoronaWhatisService) { }

  ngOnInit(): void {
   
    this.coronaService.getSymptoms().subscribe((data: []) => {

      console.log('We are here 9999');
      console.log(data);
      this.Symptoms = data;
    });
  }

}
