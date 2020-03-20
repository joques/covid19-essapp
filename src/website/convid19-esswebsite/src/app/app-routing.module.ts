import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { GeneralInfoComponent } from './components/general-info/general-info.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CoronaLatestInfoComponent } from './components/corona-latest-info/corona-latest-info.component';
import { CoronaWhatisComponent } from './components/corona-whatis/corona-whatis.component';
import { TransmissionComponent } from './components/transmission/transmission.component';
import { SymptomsComponent } from './components/symptoms/symptoms.component';
import { TreatmentComponent } from './components/treatment/treatment.component';
import { MeasuresComponent } from './components/measures/measures.component';
import { TipsComponent } from './components/tips/tips.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'general', component: GeneralInfoComponent },

  { path: 'app-about-us', component: AboutUsComponent },
  { path: 'app-corona-latest-info', component: CoronaLatestInfoComponent },
  { path: 'app-corona-whatis', component: CoronaWhatisComponent },
  { path: 'app-transmission', component: TransmissionComponent },
  { path: 'app-symptoms', component: SymptomsComponent },
  { path: 'app-treatment', component: TreatmentComponent },
  { path: 'app-measures', component: MeasuresComponent },
  { path: 'app-tips', component: TipsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
