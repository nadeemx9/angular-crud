import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { LangValidatorService } from '../services/lang-validator.service';

@Directive({
  selector: '[appLanguageValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: LangValidatorDirective, multi: true }
  ]
})
export class LangValidatorDirective implements Validator {

  constructor(private langValidatorService: LangValidatorService) { }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.langValidatorService.getLanguageValidator()(control);
  }
}
