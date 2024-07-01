import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-language-validator',
  templateUrl: './language-validator.component.html',
  styleUrls: ['./language-validator.component.scss']
})
export class LanguageValidatorComponent {

  constructor(private fb: FormBuilder){}

  formGroup = this.fb.group({
    english: ['', [Validators.required]],
    hindi: ['', [Validators.required]],
    arabic: ['', [Validators.required]],
  })

}
