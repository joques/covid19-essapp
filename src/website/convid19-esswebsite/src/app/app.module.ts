import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { GeneralInfoComponent } from './components/general-info/general-info.component';
import { ReactiveFormsModule } from "@angular/forms";
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoronaLatestInfoComponent } from './components/corona-latest-info/corona-latest-info.component';
import { CoronaWhatisComponent } from './components/corona-whatis/corona-whatis.component';
import { TransmissionComponent } from './components/transmission/transmission.component';
import { SymptomsComponent } from './components/symptoms/symptoms.component';
import { TreatmentComponent } from './components/treatment/treatment.component';
import { MeasuresComponent } from './components/measures/measures.component';
import { TipsComponent } from './components/tips/tips.component';
import { StatisticsLatestComponent } from './components/statistics-latest/statistics-latest.component';
import { StatisticsPeriodicComponent } from './components/statistics-periodic/statistics-periodic.component';
import { CircularsComponent } from './components/circulars/circulars.component';
import { StatisticsComponent } from './components/statistics/statistics.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GeneralInfoComponent,
    AboutUsComponent,
    ContactComponent,
    FooterComponent,
    CoronaLatestInfoComponent,
    CoronaWhatisComponent,
    TransmissionComponent,
    SymptomsComponent,
    TreatmentComponent,
    MeasuresComponent,
    TipsComponent,
    StatisticsLatestComponent,
    StatisticsPeriodicComponent,
    CircularsComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
