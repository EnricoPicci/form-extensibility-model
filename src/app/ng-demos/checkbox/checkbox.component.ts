import { Component } from '@angular/core';
import { DynamicForm } from 'src/app/ts-dynamic-form/form';
import { getDynamicCheckboxForm } from 'src/app/ts-demos/demo-dynamic-checkbox/demo-dynamic-checkbox.form';
import { DemoDynamicCheckboxState } from 'src/app/ts-demos/demo-dynamic-checkbox/demo-dynamic-checkbox.state';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent {
  form!: DynamicForm;
  title = 'Dynamic Checkbox Form';

  constructor(public formService: DemoDynamicCheckboxState) {}

  ngOnInit(): void {
    this.form = getDynamicCheckboxForm();
  }
}
