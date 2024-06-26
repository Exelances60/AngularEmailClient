import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout',
  standalone: true,
  imports: [],
  templateUrl: './signout.component.html',
  styleUrl: './signout.component.css',
})
export class SignoutComponent {
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.authService.signout().subscribe(() => {
      return this.router.navigateByUrl('/');
    });
  }
}
