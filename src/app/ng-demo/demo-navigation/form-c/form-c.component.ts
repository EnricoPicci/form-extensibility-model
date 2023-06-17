import { Component } from '@angular/core';
import { getDynamicForm_C } from 'src/app/ts-demo/demo-navigation/form-c/form-c.form';
import { DynamicForm } from 'src/app/ts-dynamic-form/form';

@Component({
  selector: 'app-form-c',
  templateUrl: './form-c.component.html',
  styleUrls: ['./form-c.component.css'],
})
export class FormCComponent {
  form!: DynamicForm;
  title = 'Navigation Demo Form C';

  constructor() {}

  ngOnInit(): void {
    this.form = getDynamicForm_C();
  }
}
