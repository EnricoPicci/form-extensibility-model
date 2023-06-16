import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDynamicCheckboxComponent } from './demo-dynamic-checkbox.component';

describe('FormDynamicCheckboxComponent', () => {
  let component: FormDynamicCheckboxComponent;
  let fixture: ComponentFixture<FormDynamicCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormDynamicCheckboxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormDynamicCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
