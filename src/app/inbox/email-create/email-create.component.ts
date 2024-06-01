import { Component } from '@angular/core';
import { Email } from '../email';
import { AuthService } from '../../services/auth.service';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrl: './email-create.component.css',
})
export class EmailCreateComponent {
  showModal = false;
  email: Email;
  constructor(
    private authService: AuthService,
    private emailService: EmailService
  ) {
    this.email = {
      id: '',
      to: '',
      subject: '',
      text: '',
      html: '',
      from: `${this.authService.username}@angular-email.com`,
    };
  }

  sendMail(email: Email) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }
}
