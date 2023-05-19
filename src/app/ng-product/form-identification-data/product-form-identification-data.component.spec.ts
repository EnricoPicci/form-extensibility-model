import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormIdentificationDataComponent } from './product-form-identification-data.component';

describe('ProductFormComponent', () => {
  let component: ProductFormIdentificationDataComponent;
  let fixture: ComponentFixture<ProductFormIdentificationDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFormIdentificationDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductFormIdentificationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
