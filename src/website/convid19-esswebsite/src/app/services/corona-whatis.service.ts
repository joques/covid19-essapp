import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CoronaWhatisService {

  private whatisApi = 'https://cors-anywhere.herokuapp.com/http://196.216.167.150:6547/covid/v1/awareness/whatis';
  private transmissionApi = 'https://cors-anywhere.herokuapp.com/http://196.216.167.150:6547/covid/v1/awareness/transmission';
  private symptomsApi = 'https://cors-anywhere.herokuapp.com/http://196.216.167.150:6547/covid/v1/awareness/symptoms';
  private treatmentApi = 'https://cors-anywhere.herokuapp.com/http://196.216.167.150:6547/covid/v1/awareness/treatment';
  private measuresApi = 'https://cors-anywhere.herokuapp.com/http://196.216.167.150:6547/covid/v1/awareness/measures';
  private factsApi = 'https://cors-anywhere.herokuapp.com/http://196.216.167.150:6547/covid/v1/awareness/facts';
  private tipsApi = 'https://cors-anywhere.herokuapp.com/http://196.216.167.150:6547/covid/v1/awareness/tips';
  private faqsApi = 'https://cors-anywhere.herokuapp.com/http://196.216.167.150:6551/covid/v1/faq/all';

  constructor(private client: HttpClient) { }

  public sendGetRequest() {
    return this.client.get(this.whatisApi);
  }

  public getFaqs() {
    return this.client.get(this.faqsApi);
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
  public getMeasures() {
    return this.client.get(this.measuresApi);
  }
  public getFacts() {
    return this.client.get(this.factsApi);
  }
  public getTips() {
    return this.client.get(this.tipsApi);
  }
}
