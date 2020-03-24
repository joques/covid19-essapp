import { Component, OnInit } from '@angular/core';
import { CoronaWhatisService } from 'src/app/services/corona-whatis.service';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {
 Facts = [];


  constructor(private coronaService: CoronaWhatisService) { }

  ngOnInit(): void {
  
    console.log('We are here');
    this.coronaService.getFacts().subscribe((data: []) => {
      // this.http.getWhatIsInfo().subscribe((data) => {
      console.log('We are here 9999');
      console.log(data);
      this.Facts = data;
    });
  }



}
