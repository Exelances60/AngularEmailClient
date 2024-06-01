import { ResolveFn, Router } from '@angular/router';
import { Email } from '../inbox/email';
import { inject } from '@angular/core';
import { EmailService } from './email.service';
import { catchError, EMPTY } from 'rxjs';

export const emailResolverResolver: ResolveFn<Email | { error: string }> = (
  route
) => {
  const emailServices = inject(EmailService);
  const router = inject(Router);
  const { id } = route.params;
  return emailServices.getEmail(id).pipe(
    catchError((err) => {
      router.navigateByUrl('/inbox/not-found');
      return EMPTY;
    })
  );
};
