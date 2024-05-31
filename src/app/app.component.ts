import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthModule, CommonModule, RouterLink, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  signin$: BehaviorSubject<boolean>;
  constructor(private authService: AuthService, private router: Router) {
    this.signin$ = this.authService.signedin$;
  }
  ngOnInit(): void {
    this.authService.checkAuth().subscribe(() => {});
  }
}
