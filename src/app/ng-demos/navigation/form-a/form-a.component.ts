import { Component } from '@angular/core';
import { getDynamicDropdownForm } from 'src/app/ts-demos/demo-dynamic-dropdown/demo-dynamic-dropdown.form';
import { DemoDynamicNavigationService } from 'src/app/ts-demos/demo-navigation/demo-navigation.service';
import { getDynamicForm_A } from 'src/app/ts-demos/demo-navigation/form-a/form-a.form';
import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.css'],
})
export class FormAComponent {
  form!: DynamicFormLayout;
  title = 'Form A';

  constructor(public dialogueFormService: DemoDynamicNavigationService) {}

  ngOnInit(): void {
    this.form = getDynamicForm_A();
  }
}
