import { Component } from '@angular/core';
import { getDynamicForm_B } from 'src/app/ts-demo/demo-navigation/form-b/form-b.form';
import { DynamicForm } from 'src/app/ts-dynamic-form/form';

@Component({
  selector: 'app-form-b',
  templateUrl: './form-b.component.html',
  styleUrls: ['./form-b.component.css'],
})
export class FormBComponent {
  form!: DynamicForm;
  title = 'Navigation Demo Form B';

  constructor() {}

  ngOnInit(): void {
    this.form = getDynamicForm_B();
  }
}
