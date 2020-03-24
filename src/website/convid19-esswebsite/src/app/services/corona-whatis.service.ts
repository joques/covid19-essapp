import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CoronaWhatisService {

  private whatisApi = 'http://196.216.167.150:6547/covid/v1/awareness/whatis';
  private transmissionApi = 'http://196.216.167.150:6547/covid/v1/awareness/transmission';
  private symptomsApi = 'http://196.216.167.150:6547/covid/v1/awareness/symptoms';
  private treatmentApi = 'http://196.216.167.150:6547/covid/v1/awareness/treatment';

  constructor(private client: HttpClient) { }

  public sendGetRequest() {
    return this.client.get(this.whatisApi);
  }

  public Gettransmission() {
    return this.client.get(this.transmissionApi);
  }
  public getSymptoms() {
    return this.client.get(this.symptomsApi);
  }
  public getTreatment() {
    return this.client.get(this.treatmentApi);
  }
}
