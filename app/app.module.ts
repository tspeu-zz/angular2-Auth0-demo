import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
//auth providers
import {AUTH_PROVIDERS} from 'angular2-jwt';
//se importa u agrega en import y en providers..ojo index.html
import {routing, appRoutingProviders} from './app.router';
/*PAGES COMPONENT*/
import {HomeModule ,ProfileModule} from './component/index';
//services
import {AuthGuard} from './auth.guard';
import {Auth} from './services/auth.services'; 

@NgModule({
  imports: [ BrowserModule , routing],
  declarations: [ AppComponent , HomeModule, ProfileModule],
  bootstrap: [ AppComponent ],
  providers : [
  				appRoutingProviders, 
  			   	AUTH_PROVIDERS, Auth , AuthGuard
  			   ]
})
export class AppModule { }
