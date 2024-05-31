import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
} from '@angular/forms';
import { specialCharacterPattern } from '../../CustomValidator/special-characterPatern';
import { passwordMatchValidator } from '../../CustomValidator/match-password';
import { UniqueUsername } from '../validators/unique-username';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  data = '';
  constructor(
    private uniqueUsername: UniqueUsername,
    private authServices: AuthService,
    private router: Router
  ) {}
  validators: ValidatorFn[] = [
    passwordMatchValidator('password', 'passwordConfirmation'),
    specialCharacterPattern('userName'),
  ];
  authForm = new FormGroup(
    {
      userName: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
        [this.uniqueUsername.validate]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      passwordConfirmation: new FormControl('', [Validators.required]),
    },
    {
      validators: [
        passwordMatchValidator('password', 'passwordConfirmation'),
        specialCharacterPattern('userName'),
      ],
    }
  );
  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }
    const { userName, password, passwordConfirmation } = this.authForm
      .value as {
      userName: string;
      password: string;
      passwordConfirmation: string;
    };
    this.authServices
      .signup({
        userName,
        password,
        passwordConfirmation,
      })
      .subscribe({
        next: (response) => {
          this.router.navigate(['/inbox']);
        },
        error: (err) => {
          if (err.status === 0) {
            this.authForm.setErrors({
              noConnection: true,
            });
          } else {
            this.authForm.setErrors({
              unknownError: true,
            });
          }
        },
      });
  }
}
