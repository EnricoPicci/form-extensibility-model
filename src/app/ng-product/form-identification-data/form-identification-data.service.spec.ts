import { TestBed } from '@angular/core/testing';

import { ProductFormIdentificationDataService } from './form-identification-data.service';

describe('ProductFormIdentificationDataService', () => {
  let service: ProductFormIdentificationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductFormIdentificationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
