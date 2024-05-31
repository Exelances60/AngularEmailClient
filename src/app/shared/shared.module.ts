import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FormErrorComponent } from './form-error/form-error.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputComponent, FormErrorComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InputComponent, FormErrorComponent],
})
export class SharedModule {}
