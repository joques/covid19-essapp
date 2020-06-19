import { Component, OnInit } from '@angular/core';
import { CoronaWhatisService } from 'src/app/services/corona-whatis.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {
  // data =  [];
  Faqs = [];
  showprogress: boolean;

  searchForm: FormGroup;

  search;

  constructor(private coronaService: CoronaWhatisService) { }

  ngOnInit(): void {

    this.searchForm = new FormGroup({ searchInput: new FormControl('', Validators.required) });

    this.showprogress = true;
    this.coronaService.getFaqs().subscribe((data: []) => {
      this.Faqs = data;
      console.log('FAQs: ', this.Faqs);
      this.showprogress = false;
    });
  }

}
