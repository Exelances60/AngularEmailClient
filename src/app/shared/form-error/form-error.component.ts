import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrl: './form-error.component.css',
})
export class FormErrorComponent {
  @Input() control: AbstractControl | null = null;

  errorMessages(): string[] {
    if (!this.control?.errors) return [];
    const errors = this.control.errors;
    const messages: string[] = [];
    for (const [key, value] of Object.entries(errors)) {
      console.log(key, value);
      switch (key) {
        case 'required':
          messages.push('This field is required');
          break;
        case 'minlength':
          messages.push(`Minimum length is ${value.requiredLength}`);
          break;
        case 'maxlength':
          messages.push(`Maximum length is ${value.requiredLength}`);
          break;
        case 'pattern':
          messages.push('Invalid pattern');
          break;
        case 'passwordMismatch':
          messages.push('Passwords do not match');
          break;
        case 'specialCharacterPattern':
          messages.push(`Invalid pattern not must contain special characters`);
          break;
        case 'usernameExists':
          messages.push('Username already exists');
          break;
        case 'unknownError':
          messages.push('Unknown error');
          break;
        case 'invalidLogin':
          messages.push(
            'Please check your username and password and try again.'
          );
          break;
        default:
          messages.push('Invalid field');
          break;
      }
    }
    return messages;
  }
}
