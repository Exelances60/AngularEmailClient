import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authMiddleware: CanActivateFn = (
  route,
  _state
): Observable<boolean | UrlTree> => {
  const router = inject(Router);
  const authService = inject(AuthService);
  return authService.signedin$.pipe(
    map((authenticated) => {
      if (!authenticated) {
        return router.createUrlTree(['/auth/signin']);
      }
      return true;
    })
  );
};
