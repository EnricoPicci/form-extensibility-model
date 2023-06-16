import { Component } from '@angular/core';
import { getDynamicCheckboxForm } from 'src/app/ts-demo/demo-dynamic-checkbox/demo-dynamic-checkbox.form';
import { DynamicForm } from 'src/app/ts-dynamic-form/form';

@Component({
  selector: 'app-demo-dynamic-checkbox',
  templateUrl: './demo-dynamic-checkbox.component.html',
  styleUrls: ['./demo-dynamic-checkbox.component.css'],
})
export class FormDynamicCheckboxComponent {
  form!: DynamicForm;
  title = 'Dynamic Checkbox Form';

  constructor() {}

  ngOnInit(): void {
    this.form = getDynamicCheckboxForm();
  }
}
