import { Component } from '@angular/core';
import { DemoDynamicNavigationService } from 'src/app/ts-demos/demo-navigation/demo-navigation.service';
import { getDynamicForm_B } from 'src/app/ts-demos/demo-navigation/form-b/form-b.form';
import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

@Component({
  selector: 'app-form-b',
  templateUrl: './form-b.component.html',
  styleUrls: ['./form-b.component.css'],
})
export class FormBComponent {
  form!: DynamicFormLayout;
  title = 'Form B';

  constructor(public dialogueFormService: DemoDynamicNavigationService) {}

  ngOnInit(): void {
    this.form = getDynamicForm_B();
  }
}
