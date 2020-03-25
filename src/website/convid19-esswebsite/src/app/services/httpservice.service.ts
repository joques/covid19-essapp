import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {


  constructor(private http: HttpClient) { }

 

  getCirculars(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    return this.http
      .get('http://196.216.167.190/codiv/v1/circulars', {
        headers: httpOptions.headers
      })
      .pipe(map(res => res));
  }

  getLatestInfo(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    return this.http
      .get('http://196.216.167.190/codiv/v1/statistics/latest', {
        headers: httpOptions.headers
      })
      .pipe(map(res => res));
  }

  getPeriodicStats(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token',
      })
    };

    return this.http

      .get('http://196.216.167.150:6549/covid/v1/statistics/all', {
        headers: httpOptions.headers
      })
      .pipe(map(res => res));
  }

  getMeasures(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token',
      })
    };

    return this.http
      .get('http://196.216.167.190/codiv/v1/awareness/measures', {
        headers: httpOptions.headers
      })
      .pipe(map(res => res));
  }

  getSymptoms(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    return this.http
      .get('http://196.216.167.190/codiv/v1/awareness/symptoms', {
        headers: httpOptions.headers
      })
      .pipe(map(res => res));
  }

  getTips(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    return this.http
      .get('http://196.216.167.190/codiv/v1/awareness/tips', {
        headers: httpOptions.headers
      })
      .pipe(map(res => res));
  }

  getTreatment(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    return this.http
      .get('http://196.216.167.190/codiv/v1/awareness/treatment', {
        headers: httpOptions.headers
      })
      .pipe(map(res => res));
  }

  getWhatIsInfo(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    return this.http
      .get('https://cors-anywhere.herokuapp.com/http://196.216.167.150/covid/v1/awareness/whatis', {
        headers: httpOptions.headers
      })
      .pipe(map(res => res));
  }



  getFaqAll(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    return this.http
      .get('http://196.216.167.150:6551/codiv/v1/faq/all', {
        headers: httpOptions.headers
      })
      .pipe(map(res => res));
  }
}
