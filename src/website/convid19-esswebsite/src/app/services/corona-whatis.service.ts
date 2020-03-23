import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CoronaWhatisService {

  private whatisApi = 'http://196.216.167.150:6547/covid/v1/awareness/whatis';

  constructor(private client: HttpClient) { }

  public sendGetRequest() {
    return this.client.get(this.whatisApi);
  }
}
