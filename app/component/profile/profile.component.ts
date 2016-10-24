import { Component }      from '@angular/core';
import {Auth} from '../../services/auth.services';


@Component({
	moduleId : module.id,
	selector :'profile-component',
	templateUrl: 'profile.component.html'
})
export class ProfileModule {

	profile :any;

	constructor (private auth: Auth){
		this.profile = JSON.parse(localStorage.getItem('profile'));
		console.log(this.profile);

	}

 }