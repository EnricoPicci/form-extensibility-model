import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDynamicDropdownComponent } from './demo-dynamic-dropdown.component';

describe('FormDynamicDropdownComponent', () => {
  let component: FormDynamicDropdownComponent;
  let fixture: ComponentFixture<FormDynamicDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormDynamicDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormDynamicDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
