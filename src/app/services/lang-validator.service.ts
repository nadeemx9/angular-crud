import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LangValidatorService {
  private pattern = /^[a-zA-Z0-9\s!@#$%^&*(),.?":{}|<>~`'[\]\\\/\-+=;_]*$/;

  getLanguageValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const valid = this.pattern.test(control.value);
      return valid ? null : { 'invalidLanguage': { value: control.value } };
    };
  }
}
