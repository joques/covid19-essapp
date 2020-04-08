import { Component, OnInit } from '@angular/core';
import { CoronaWhatisService } from 'src/app/services/corona-whatis.service';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent implements OnInit {
  Treatment = [];

  constructor(private coronaService: CoronaWhatisService) { }

  ngOnInit(): void {
    console.log('We are here');
    this.coronaService.getTreatment().subscribe((data: []) => {
      // this.http.getWhatIsInfo().subscribe((data) => {
      console.log('We are here 9999');
      console.log(data);
      this.Treatment = data;
    });
  }

}
