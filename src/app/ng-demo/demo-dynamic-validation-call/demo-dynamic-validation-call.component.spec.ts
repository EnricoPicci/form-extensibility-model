import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDynamicValidationCallComponent } from './demo-dynamic-validation-call.component';

describe('DemoDynamicValidationCallComponent', () => {
  let component: DemoDynamicValidationCallComponent;
  let fixture: ComponentFixture<DemoDynamicValidationCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoDynamicValidationCallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDynamicValidationCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
