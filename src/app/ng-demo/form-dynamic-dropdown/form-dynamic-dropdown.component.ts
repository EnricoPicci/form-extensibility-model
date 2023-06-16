import { Component } from '@angular/core';
import { DynamicForm } from 'src/app/ts-dynamic-form/form';
import { getDynamicDropdownForm } from 'src/app/ts-demo/form-dynamic-dropdown/form-dynamic-dropdown.form';

@Component({
  selector: 'app-form-dynamic-dropdown',
  templateUrl: './form-dynamic-dropdown.component.html',
  styleUrls: ['./form-dynamic-dropdown.component.css'],
})
export class FormDynamicDropdownComponent {
  form!: DynamicForm;
  title = 'Dynamic Dropdown Form';

  constructor() {}

  ngOnInit(): void {
    this.form = getDynamicDropdownForm();
  }
}
