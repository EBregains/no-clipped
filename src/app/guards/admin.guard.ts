import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const adminGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    return authService.user
      .pipe(
        map(user => {
          if (user && user?.role === 'admin')
            return true;
          else {
            router.navigate(['/home']);
            return false;
          }
        })
      )
};
