import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MatBadgeModule } from '@angular/material/badge';
import { AgmCoreModule } from "@agm/core";

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
import { CoronaWhatisService } from './services/corona-whatis.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaqsComponent } from './components/faqs/faqs.component';


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
    StatisticsComponent,
    FaqsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyANVw389Q10N46d9EvyUhbHwSP0KOycikY'
    }),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatBadgeModule
  ],
  providers: [CoronaWhatisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
