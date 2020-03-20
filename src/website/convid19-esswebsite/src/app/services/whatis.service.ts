import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class WhatisService {

  constructor(private http: HttpClient) { }

  getWhatIsInfo(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    return this.http
      .get('http://196.216.167.190/codiv/v1/awareness/whatis', {
        headers: httpOptions.headers
      })
      .pipe(map(res => res));
  }
}
