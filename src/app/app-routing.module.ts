import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from "./contact/contact.component";
import { CareerComponent } from './career/career.component';
import { LoginComponent } from './login/login.component'
const routes: Routes = [
  {
    path:'aboutus',
    component: AboutusComponent
  },
  {
    path: 'utilities',
    component: UtilitiesComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'career',
    component: CareerComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



