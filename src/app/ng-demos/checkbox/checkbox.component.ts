import { Component } from '@angular/core';
import { DynamicForm } from 'src/app/ts-dynamic-form/form';
import { getDynamicCheckboxForm } from 'src/app/ts-demos/demo-dynamic-checkbox/demo-dynamic-checkbox.form';
import { DemoDynamicCheckboxService } from 'src/app/ts-demos/demo-dynamic-checkbox/demo-dynamic-checkbox.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent {
  form!: DynamicForm;
  title = 'Dynamic Checkbox Form';

  constructor(public formService: DemoDynamicCheckboxService) {}

  ngOnInit(): void {
    this.form = getDynamicCheckboxForm();
  }
}
