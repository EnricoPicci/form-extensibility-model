import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormAddressComponent } from './product-form-address.component';

describe('FormAddressComponent', () => {
  let component: ProductFormAddressComponent;
  let fixture: ComponentFixture<ProductFormAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFormAddressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductFormAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
