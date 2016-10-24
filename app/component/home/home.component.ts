import { Component }      from '@angular/core';
import {Auth} from '../../services/auth.services';

@Component({
	moduleId : module.id,
	selector :'home-component',
	templateUrl: 'home.component.html'
})
export class HomeModule {
	constructor (private auth: Auth){}

 }