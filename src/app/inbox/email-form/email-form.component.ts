import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Email } from '../email';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.css',
})
export class EmailFormComponent {
  emailForm!: FormGroup;
  @Input() email!: Email;
  @Output() emailSubmit = new EventEmitter<Email>();

  ngOnInit(): void {
    const { subject, from, to, text } = this.email;

    this.emailForm = new FormGroup({
      to: new FormControl(to, [Validators.required, Validators.email]),
      from: new FormControl({ value: from, disabled: true }), // { value: from, disabled: true } is used to disable the input field
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text, [Validators.required]),
    });
  }

  sendControl(controlName: string) {
    return this.emailForm.get(controlName) as FormControl;
  }

  onSubmit() {
    if (this.emailForm.invalid) {
      return;
    }
    this.emailSubmit.emit(this.emailForm.getRawValue());
  }
}
