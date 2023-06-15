import { Component } from '@angular/core';

import { Action } from 'src/app/ts-dynamic-form/actions/action';
import { DynamicForm } from 'src/app/ts-dynamic-form/form';
import { getGeneraliAddressForm } from 'src/app/ts-generali/form-address/form-address.form';

@Component({
  selector: 'app-generali-form-address',
  templateUrl: './generali-form-address.component.html',
  styleUrls: ['./generali-form-address.component.css'],
})
export class GeneraliFormAddressComponent {
  form!: DynamicForm;
  title = 'Generali Address Form';

  constructor() {}

  ngOnInit(): void {
    this.form = getGeneraliAddressForm();
  }
}
