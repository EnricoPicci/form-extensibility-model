import { Component, OnInit } from '@angular/core';

import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import { getProductIdentificationDataForm } from 'src/app/ts-product/form-identification-data/form-identification-data.form';

@Component({
  selector: 'app-product-form-identification-data',
  templateUrl: './product-form-identification-data.component.html',
  styleUrls: ['./product-form-identification-data.component.css'],
})
export class ProductFormIdentificationDataComponent implements OnInit {
  form!: DynamicFormLayout;
  title = 'Identification Data Form';

  constructor() {}

  ngOnInit(): void {
    this.form = getProductIdentificationDataForm();
  }
}
