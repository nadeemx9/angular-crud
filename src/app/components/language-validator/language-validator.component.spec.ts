import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageValidatorComponent } from './language-validator.component';

describe('LanguageValidatorComponent', () => {
  let component: LanguageValidatorComponent;
  let fixture: ComponentFixture<LanguageValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageValidatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
