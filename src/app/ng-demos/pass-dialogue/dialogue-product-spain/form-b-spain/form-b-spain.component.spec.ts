import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBSpainComponent } from './form-b-spain.component';

describe('FormBSpainComponent', () => {
  let component: FormBSpainComponent;
  let fixture: ComponentFixture<FormBSpainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBSpainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBSpainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
