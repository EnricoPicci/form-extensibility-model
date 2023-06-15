import { Component, OnInit } from '@angular/core';

import { DynamicForm } from 'src/app/ts-dynamic-form/form';
import { getProductIdentificationDataForm } from 'src/app/ts-product/form-identification-data/form-identification-data.form';

@Component({
  selector: 'app-product-form-identification-data',
  templateUrl: './product-form-identification-data.component.html',
  styleUrls: ['./product-form-identification-data.component.css'],
})
export class ProductFormIdentificationDataComponent implements OnInit {
  form!: DynamicForm;
  title = 'Identification Data Form';

  constructor() {}

  ngOnInit(): void {
    this.form = getProductIdentificationDataForm();
  }
}
