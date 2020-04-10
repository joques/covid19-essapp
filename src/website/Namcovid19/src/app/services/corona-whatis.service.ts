import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpHandler } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from "rxjs/operators";
import { Region } from '../models/region';


@Injectable({
  providedIn: 'root'
})
export class CoronaWhatisService {

  private whatisApi = 'https://covidservices.nust.na:6547/covid/v1/awareness/whatis';
  private transmissionApi = 'https://covidservices.nust.na:6547/covid/v1/awareness/transmission';
  private symptomsApi = 'https://covidservices.nust.na:6547/covid/v1/awareness/symptoms';
  private treatmentApi = 'https://covidservices.nust.na:6547/covid/v1/awareness/treatment';
  private measuresApi = 'https://covidservices.nust.na:6547/covid/v1/awareness/measures';
  private factsApi = 'https://covidservices.nust.na:6547/covid/v1/awareness/facts';
  private tipsApi = 'https://covidservices.nust.na:6547/covid/v1/awareness/tips';
  private faqsApi = 'https://covidservices.nust.na:6551/covid/v1/faq/all';
  private circulars = 'https://covidservices.nust.na:6552/covid/v1/docs/doc';
  private newsApi = 'https://covidservices.nust.na:6547/covid/v1/awareness/latest';
  private centresApi = 'https://covidservices.nust.na:6550/covid/v1/centre/all';
  private statisticsApi = 'https://covidservices.nust.na:6549/covid/v1/statistics/all';

  apiURL: string = 'https://covidservices.nust.na:{port}/covid/v1';
  constructor(private client: HttpClient) {
    //     var handler = new ();
    // handler.ClientCertificateOptions = ClientCertificateOption.Manual;
    // handler.SslProtocols = SslProtocols.Tls12;
    // handler.ClientCertificates.Add(new X509Certificate2("cert.crt"));
  }

  public getRegionalData() {

    return this.client.get<Region[]>(`${this.apiURL.replace('{port}', '6549')}/statistics/aggregate`);
  }
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

  public getCirculars() {
    return this.client.get(this.circulars);
  }
  public getLatestNews() {
    return this.client.get(this.newsApi);
  }

  public getTestingCentres() {
    return this.client.get(this.centresApi);
  }
  public getStats() {
    //this.client.

    return this.client.get(this.statisticsApi);

  }
}