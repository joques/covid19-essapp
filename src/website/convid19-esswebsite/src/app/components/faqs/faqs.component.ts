import { Component, OnInit } from '@angular/core';
import {HttpserviceService} from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

  data: any;
  constructor(  private faqService: HttpserviceService) { }


  ngOnInit(): void {
  }

  getAllFaqs() {
    this.faqService.getFaqAll()
      .subscribe((result: any) => {
      
        result.faqData.foEach(data => {
          this.data = data.faqData;
        
            console.log(data);
        });
      });
  }

}
