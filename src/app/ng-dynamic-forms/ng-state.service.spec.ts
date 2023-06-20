import { TestBed } from '@angular/core/testing';

import { NgStateService } from './ng-state.service';

describe('NgStateService', () => {
  let service: NgStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
