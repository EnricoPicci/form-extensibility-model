import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCGeneraliComponent } from './form-c.component';

describe('FormCComponent', () => {
  let component: FormCGeneraliComponent;
  let fixture: ComponentFixture<FormCGeneraliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCGeneraliComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormCGeneraliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
