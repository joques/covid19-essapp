import { Component, OnInit } from '@angular/core';
import { CoronaWhatisService } from 'src/app/services/corona-whatis.service';

@Component({
  selector: 'app-measures',
  templateUrl: './measures.component.html',
  styleUrls: ['./measures.component.css']
})
export class MeasuresComponent implements OnInit {
  Measures = [];
  constructor(private coronaService: CoronaWhatisService) { }

  ngOnInit(): void {
    console.log('We are here');
    this.coronaService.getMeasures().subscribe((data: []) => {
      // this.http.getWhatIsInfo().subscribe((data) => {
      console.log('We are here 9999');
      console.log(data);
      this.Measures = data;
    });
  }

}
