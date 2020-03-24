import { Component, OnInit } from '@angular/core';
import { CoronaWhatisService } from 'src/app/services/corona-whatis.service';

@Component({
  selector: 'app-transmission',
  templateUrl: './transmission.component.html',
  styleUrls: ['./transmission.component.css']
})
export class TransmissionComponent implements OnInit {
  Transmission = [];

  constructor(private coronaService: CoronaWhatisService) { }

  ngOnInit(): void {
    console.log('We are here');
    this.coronaService.Gettransmission().subscribe((data: []) => {
      // this.http.getWhatIsInfo().subscribe((data) => {
      console.log('We are here 9999');
      console.log(data);
      this.Transmission = data;
    });
  }

}
