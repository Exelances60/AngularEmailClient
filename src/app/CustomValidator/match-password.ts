import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function passwordMatchValidator(
  controlName: string,
  matchingControlName: string
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const formGroup = control as FormGroup;
    const controlValue = formGroup.controls[controlName].value;
    const matchingControlValue = formGroup.controls[matchingControlName].value;

    if (controlValue !== matchingControlValue) {
      formGroup.controls[matchingControlName].setErrors({
        passwordMismatch: true,
      });
      return { passwordMismatch: true };
    } else {
      formGroup.controls[matchingControlName].setErrors(null);
      return null;
    }
  };
}
