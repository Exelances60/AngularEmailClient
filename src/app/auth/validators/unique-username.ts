import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator } from '@angular/forms';
import { catchError, map, of } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UniqueUsername implements AsyncValidator {
  constructor(private authServices: AuthService) {}
  validate = (control: AbstractControl): any => {
    const { value } = control;
    return this.authServices.usernameAvailable(value).pipe(
      map((value) => {
        if (value.available) {
          return null;
        }
        return { usernameExists: true };
      }),
      catchError((err) => {
        if (err.error && err.error.username) {
          return of({ usernameExists: true });
        } else {
          return of({ unknownError: true });
        }
      })
    );
  };
}
