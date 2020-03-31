import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
 headers;

  apiURL: string = 'http://196.216.167.150:6552/covid/v1';
  constructor(private http: HttpClient) { 

    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Headers', 'Authorization');
  }



  getCirculars() {
    return this.http.get('https://cors-anywhere.herokuapp.com/http://196.216.167.150:6552/covid/v1/docs/description');
  }

  downloadCirculars(docid) {
    console.log(docid);
    this.http.get('https://cors-anywhere.herokuapp.com/http://196.216.167.150:6552/covid/v1/docs/doc' + '/' + docid, { responseType: 'blob'}).subscribe(res => {
      window.open(window.URL.createObjectURL(res));
    });
  }

  getLatestInfo(): any {
    return this.http.get<any>(`${this.apiURL}/statistics/latest`);
  }

  getLatestStats(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token',
      })
    };
    httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
    return this.http
      .get('http://196.216.167.150:6549/covid/v1/statistics/all', {
        headers: httpOptions.headers
      }
        )
      .pipe(map(res => res));
  }

  getPeriodicStats(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token',
      })
    };

    httpOptions.headers.append('Access-Control-Allow-Origin', '**');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
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
      .get('http://196.216.167.150:6551/covid/v1/faq/all', {
        headers: httpOptions.headers
      })
      .pipe(map(res => res));
  }
}
