import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAGeneraliComponent } from './form-a-generali.component';

describe('FormAGeneraliComponent', () => {
  let component: FormAGeneraliComponent;
  let fixture: ComponentFixture<FormAGeneraliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAGeneraliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAGeneraliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
