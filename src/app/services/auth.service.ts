import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

interface UsernameAvailableResponse {
  available: boolean;
}
interface SignupCredentials {
  userName: string;
  password: string;
  passwordConfirmation: string;
}

interface SignupResponse {
  username: string;
}

interface SignedinResponse {
  authenticated: boolean;
  username: string;
}

interface SigninCredentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';
  signedin$ = new BehaviorSubject(null) as unknown as BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(
      `${this.rootUrl}/auth/username`,
      {
        username: username,
      }
    );
  }

  signup(crenditials: SignupCredentials) {
    return this.http
      .post<SignupResponse>(`${this.rootUrl}/auth/signup`, {
        username: crenditials.userName,
        ...crenditials,
      })
      .pipe(
        tap((response) => {
          this.signedin$.next(true);
        })
      );
  }

  checkAuth() {
    return this.http
      .get<SignedinResponse>(`${this.rootUrl}/auth/signedin`)
      .pipe(
        tap((response) => {
          this.signedin$.next(response.authenticated);
        })
      );
  }

  signout() {
    return this.http.post(`${this.rootUrl}/auth/signout`, {}).pipe(
      tap(() => {
        this.signedin$.next(false);
      })
    );
  }
  signin(credentials: SigninCredentials) {
    return this.http.post(`${this.rootUrl}/auth/signin`, credentials).pipe(
      tap((value) => {
        this.signedin$.next(true);
      })
    );
  }
}
