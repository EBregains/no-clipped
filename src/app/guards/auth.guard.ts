import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable, map } from 'rxjs';


// export const authGuard: CanActivateFn = (route, state) => {

  @Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {
  
    constructor(
      private router: Router,
      private auth: AuthService
    ) {}
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  
      return this.auth.user
        .pipe(
          map(user => {
            if (user)
              return true;
            else {
              this.router.navigate(['/home']);
              return false;
            }
          })
        );
  
    }
  }