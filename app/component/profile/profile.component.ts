import { Component }      from '@angular/core';
import {Auth} from '../../services/auth.services';


@Component({
	moduleId : module.id,
	selector :'profile-component',
	templateUrl: 'profile.component.html'
})
export class ProfileModule {
	constructor (private auth: Auth){}

 }