import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from 'src/app/services/httpservice.service';
import { CoronaWhatisService } from 'src/app/services/corona-whatis.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {
  // data =  [];
  Faqs = [];

  constructor( private faqService: HttpserviceService, private coronaService: CoronaWhatisService) { }


  ngOnInit(): void {

    // this.getFaqs();

    console.log('We are here');
    this.coronaService.getFaqs().subscribe((data: []) => {
      // this.http.getWhatIsInfo().subscribe((data) => {
      console.log('We are here 9999');
      console.log(data);
      this.Faqs = data;
    });

  }

  // getFaqs() {
  //   this.faqService.getFaqAll()
  //     .subscribe((result: any) => {
  //       if (result.success) {
  //         // this.Users.push(result);
  //         result.faq.forEach(data => {

  //           this.data.push(data);
  //           console.log(data)
  //         });
  //       }

  //     });
  // }

}
