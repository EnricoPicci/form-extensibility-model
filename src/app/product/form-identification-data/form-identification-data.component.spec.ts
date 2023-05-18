import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIdentificationDataComponent } from './form-identification-data.component';

describe('FormComponent', () => {
  let component: FormIdentificationDataComponent;
  let fixture: ComponentFixture<FormIdentificationDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormIdentificationDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormIdentificationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
