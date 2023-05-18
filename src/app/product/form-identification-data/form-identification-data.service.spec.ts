import { TestBed } from '@angular/core/testing';

import { FormIdentificationDataService } from './form-identification-data.service';

describe('FormIdentificationDataService', () => {
  let service: FormIdentificationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormIdentificationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
