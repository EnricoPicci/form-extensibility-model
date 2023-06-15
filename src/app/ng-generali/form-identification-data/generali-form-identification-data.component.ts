import { Component } from '@angular/core';

import { DynamicForm } from 'src/app/ts-dynamic-form/form';
import { getGeneraliIdentificationDataForm } from 'src/app/ts-generali/form-identification-data/form-identification-data.form';

@Component({
  selector: 'app-generali-form-identification-data',
  templateUrl: './generali-form-identification-data.component.html',
  styleUrls: ['./generali-form-identification-data.component.css'],
})
export class GeneraliFormIdentificationDataComponent {
  form!: DynamicForm;
  title = 'Generali Identification Data Form';

  constructor() {}

  ngOnInit(): void {
    this.form = getGeneraliIdentificationDataForm();
  }
}
