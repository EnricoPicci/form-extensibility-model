import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationCallComponent } from './validation-call.component';

describe('ValidationCallComponent', () => {
  let component: ValidationCallComponent;
  let fixture: ComponentFixture<ValidationCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationCallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
