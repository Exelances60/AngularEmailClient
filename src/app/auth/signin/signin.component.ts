import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  signInForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.signInForm.invalid) {
      return;
    }
    this.authService
      .signin(this.signInForm.value as { username: string; password: string })
      .subscribe({
        next: () => {
          return this.router.navigate(['/inbox']);
        },
        error: (err) => {
          if (err.status === 422) {
            if (err.error.password) {
              this.signInForm.setErrors({
                wrongPassword: true,
                message: err.error.password,
              });
            }
            if (err.error.username) {
              this.signInForm.setErrors({
                wrongUsername: true,
                message: err.error.username,
              });
            }
          }
        },
      });
  }
}
