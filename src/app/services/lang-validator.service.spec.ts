import { TestBed } from '@angular/core/testing';

import { LangValidatorService } from './lang-validator.service';

describe('LangValidatorService', () => {
  let service: LangValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LangValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
