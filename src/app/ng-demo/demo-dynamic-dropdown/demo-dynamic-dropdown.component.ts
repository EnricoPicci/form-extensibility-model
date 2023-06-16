import { Component } from '@angular/core';
import { DynamicForm } from 'src/app/ts-dynamic-form/form';
import { getDynamicDropdownForm } from 'src/app/ts-demo/demo-dynamic-dropdown/demo-dynamic-dropdown.form';

@Component({
  selector: 'app-demo-dynamic-dropdown',
  templateUrl: './demo-dynamic-dropdown.component.html',
  styleUrls: ['./demo-dynamic-dropdown.component.css'],
})
export class FormDynamicDropdownComponent {
  form!: DynamicForm;
  title = 'Dynamic Dropdown Form';

  constructor() {}

  ngOnInit(): void {
    this.form = getDynamicDropdownForm();
  }
}
