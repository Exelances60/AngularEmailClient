import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

export function specialCharacterPattern(controlName: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const formGroup = control as FormGroup;
    const controlValue = formGroup.controls[controlName].value;
    const pattern = /^[a-zA-Z0-9]*$/;
    if (!pattern.test(controlValue)) {
      formGroup.controls[controlName].setErrors({
        specialCharacterPattern: true,
      });
      return { specialCharacterPattern: true };
    } else {
      return null;
    }
  };
}
