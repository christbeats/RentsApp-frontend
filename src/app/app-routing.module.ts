import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { Page404Component } from './page404/page404.component';
import { SinglePropertyComponent } from './single-property/single-property.component';
import { SingleAgentComponent } from './single-agent/single-agent.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { SellComponent } from './sell/sell.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropertiesComponent } from './properties/properties.component';
import { DemandeComponent } from './demande/demande.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'listing',
    component: ListingComponent
  },

  {
    path: 'error',
    component: Page404Component
  },

  {
    path: 'singleproperty',
    component: SinglePropertyComponent
  },

  {
    path: 'singleagent',
    component: SingleAgentComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'profile',
    component: ProfileComponent
  },

  {
    path: 'sell',
    component: SellComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
  },

  {
    path: 'dashboard/properties',
    component: PropertiesComponent,
  },

  {
    path: 'dashboard/demande',
    component: DemandeComponent,
  },

  {
    path: 'homeDashboard',
    component: HomeDashboardComponent,
  },







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
