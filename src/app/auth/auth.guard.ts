import { CanMatchFn } from '@angular/router';
import { inject } from '@angular/core';
import { skipWhile, take, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  return authService.signedin$.pipe(
    skipWhile((value) => value === null),
    take(1),
    tap((authenticated) => {
      if (!authenticated) {
        router.navigate(['/auth/signin']);
      }
      return authenticated;
    })
  );
};
