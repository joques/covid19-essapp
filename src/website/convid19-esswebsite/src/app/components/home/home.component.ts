import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    particlesJS.load('particles-js', 'particles.json', null);
  }

  scroll($element: HTMLElement): void {
    // $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
