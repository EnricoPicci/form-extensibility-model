import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneraliFormIdentificationDataComponent } from './generali-form-identification-data.component';

describe('GeneraliFormIdentificationDataComponent', () => {
  let component: GeneraliFormIdentificationDataComponent;
  let fixture: ComponentFixture<GeneraliFormIdentificationDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneraliFormIdentificationDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneraliFormIdentificationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
