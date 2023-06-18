import { Component } from '@angular/core';
import { DemoDynamicNavigationService } from 'src/app/ts-demos/demo-navigation/demo-navigation.service';
import { getDynamicForm_C } from 'src/app/ts-demos/demo-navigation/form-c/form-c.form';
import { DynamicForm } from 'src/app/ts-dynamic-form/form';

@Component({
  selector: 'app-form-c',
  templateUrl: './form-c.component.html',
  styleUrls: ['./form-c.component.css'],
})
export class FormCComponent {
  form!: DynamicForm;
  title = 'Form C';

  constructor(public formService: DemoDynamicNavigationService) {}

  ngOnInit(): void {
    this.form = getDynamicForm_C();
  }
}
