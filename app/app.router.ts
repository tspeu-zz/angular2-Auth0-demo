import  {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeModule,ProfileModule} from './component/index';


//se crea una constante para exportar. de tipo Routes..un array de objetos
const appRoutes : Routes =[
		{path: '', component : HomeModule},
		{path: 'profile', component: ProfileModule}
];
//exporta una constante un array vacio
export const appRoutingProviders : any[] = [];
//esportar routing tipo ModulewProviders igual al routerModule y se le pasa el array de routes
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);