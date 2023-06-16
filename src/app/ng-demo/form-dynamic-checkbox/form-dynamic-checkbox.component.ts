import { Component } from '@angular/core';
import { getDynamicCheckboxForm } from 'src/app/ts-demo/form-dynamic-checkbox/form-dynamic-checkbox.form';
import { DynamicForm } from 'src/app/ts-dynamic-form/form';

@Component({
  selector: 'app-form-dynamic-checkbox',
  templateUrl: './form-dynamic-checkbox.component.html',
  styleUrls: ['./form-dynamic-checkbox.component.css'],
})
export class FormDynamicCheckboxComponent {
  form!: DynamicForm;
  title = 'Dynamic Checkbox Form';

  constructor() {}

  ngOnInit(): void {
    this.form = getDynamicCheckboxForm();
  }
}
