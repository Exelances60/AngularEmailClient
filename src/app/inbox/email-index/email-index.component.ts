import { Component } from '@angular/core';
import { EmailService, EmailSummary } from '../../services/email.service';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrl: './email-index.component.css',
})
export class EmailIndexComponent {
  emails: EmailSummary[] = [];
  selectedEmailId: string | null = null;
  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    this.emailService.getEmails().subscribe((emails) => {
      this.emails = emails;
    });
  }
}
