import {Injectable} from '@angular/core';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {CanActivate} from '@angular/router';
import {Auth} from './services/auth.services';

@Injectable()
export class AuthGuard implements CanActivate{
//canActivate premite bloquear ciertos paths segun las condiciones 
	constructor(private auth: Auth, private route: Router){}


	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
		if(this.auth.authenticated()){
			console.log('AUTH GUARD OK');
			return true;

		}else{
			console.log('BLOCKED BY AUTH GUARD');
			this.route.navigate(['/']);
			return false;
		}
	}

}





