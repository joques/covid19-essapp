import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    // craating and script element and add it to the body
    const script = this.document.createElement('script');
    script.id = 'mainscript';
    script.src = 'assets/js/main.js';
    script.type = 'text/javascript';

    this.document.body.appendChild(script);
  }

}
