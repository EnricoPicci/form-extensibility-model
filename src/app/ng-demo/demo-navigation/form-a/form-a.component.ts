import { Component } from '@angular/core';
import { getDynamicForm_A } from 'src/app/ts-demo/demo-navigation/form-a/form-a.form';
import { DynamicForm } from 'src/app/ts-dynamic-form/form';

@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.css'],
})
export class FormAComponent {
  form!: DynamicForm;
  title = 'Navigation Demo Form A';

  constructor() {}

  ngOnInit(): void {
    this.form = getDynamicForm_A();
  }
}
