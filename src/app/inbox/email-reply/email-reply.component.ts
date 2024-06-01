import { Component, Input, SimpleChanges } from '@angular/core';
import { Email } from '../email';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrl: './email-reply.component.css',
})
export class EmailReplyComponent {
  showModal = false;
  @Input() email!: Email;
  constructor(private emailService: EmailService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.email = {
      ...this.email,
      to: this.email.from,
      from: this.email.to,
      subject: `Re: ${this.email.subject}`,
      text: `\n\n\n-------- ${
        this.email.from
      } wrote:\n>${this.email.text.replace(/\n/g, '\n> ')}`,
    };
  }

  onSend(email: Email) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }
}
