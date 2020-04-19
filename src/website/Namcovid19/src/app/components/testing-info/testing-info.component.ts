import { Component, OnInit } from '@angular/core';
import { CoronaWhatisService } from 'src/app/services/corona-whatis.service';

@Component({
  selector: 'app-testing-info',
  templateUrl: './testing-info.component.html',
  styleUrls: ['./testing-info.component.css']
})
export class TestingInfoComponent implements OnInit {
  testingInfo = [];

  constructor(private coronaService: CoronaWhatisService) { }

  ngOnInit(): void {
    this.coronaService.getTestinginfo().subscribe((data: []) => {
      // this.http.getWhatIsInfo().subscribe((data) => {
      console.log('We are here testing info');
      console.log(data);
      this.testingInfo = data;
    });
  }

}
