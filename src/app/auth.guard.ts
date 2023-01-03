import {  ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import {Injectable} from '@angular/core'
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService){

  }
  canActivate(){
    return this.authService.isAuthenticated();
  }
  
}
