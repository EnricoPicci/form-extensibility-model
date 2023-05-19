import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneraliFormAddressComponent } from './generali-form-address.component';

describe('FormAddressComponent', () => {
  let component: GeneraliFormAddressComponent;
  let fixture: ComponentFixture<GeneraliFormAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneraliFormAddressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneraliFormAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
