import { TestBed } from '@angular/core/testing';

import { GeneraliFormIdentificationDataService } from './generali-form-identification-data.service';

describe('GeneraliFormIdentificationDataService', () => {
  let service: GeneraliFormIdentificationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneraliFormIdentificationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
