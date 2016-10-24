import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
//se importa u agrega en import y en providers..ojo index.html
import {routing, appRoutingProviders} from './app.router';
/*PAGES COMPONENT*/
import {HomeModule ,ProfileModule} from './component/index';

@NgModule({
  imports: [ BrowserModule , routing],
  declarations: [ AppComponent , HomeModule, ProfileModule],
  bootstrap: [ AppComponent ],
  providers : [appRoutingProviders ]
})
export class AppModule { }
