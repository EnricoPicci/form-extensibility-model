import { Component } from '@angular/core';
import { getDynamicValidationForm } from 'src/app/ts-demo/demo-dynamic-validation-call/demo-dynamic-validation-call.form';
import { DynamicForm } from 'src/app/ts-dynamic-form/form';

@Component({
  selector: 'app-demo-dynamic-validation-call',
  templateUrl: './demo-dynamic-validation-call.component.html',
  styleUrls: ['./demo-dynamic-validation-call.component.css'],
})
export class DemoDynamicValidationCallComponent {
  form!: DynamicForm;
  title = 'Dynamic Validation Call Form';

  constructor() {}

  ngOnInit(): void {
    this.form = getDynamicValidationForm();
  }
}
