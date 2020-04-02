import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  scroll($element: HTMLElement): void {
    // $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
