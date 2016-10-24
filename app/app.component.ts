import { Component } from '@angular/core';
import {Auth} from './services/auth.services';
@Component({
	moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent { 

		constructor (private auth: Auth){
			
		}
}
