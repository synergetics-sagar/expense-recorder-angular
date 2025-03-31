import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private as: AuthService, private router: Router) { }

  canActivate(): boolean {
    if(this.as.isLoggedIn()){
      return true
    }
    else{
      this.router.navigate(["/login"])
      return false
    }
  }
}
