import { Component } from '@angular/core';

import { DynamicForm } from 'src/app/ts-dynamic-form/form';
import { getProductAddressForm } from 'src/app/ts-product/form-address/form-address.form';

@Component({
  selector: 'app-product-form-address',
  templateUrl: './product-form-address.component.html',
  styleUrls: ['./product-form-address.component.css'],
})
export class ProductFormAddressComponent {
  form!: DynamicForm;
  title = 'Product Address Form';

  constructor() {}

  ngOnInit(): void {
    this.form = getProductAddressForm();
  }
}
