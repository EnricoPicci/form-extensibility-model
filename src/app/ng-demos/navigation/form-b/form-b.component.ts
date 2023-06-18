import { Component } from '@angular/core';
import { DemoDynamicNavigationService } from 'src/app/ts-demos/demo-navigation/demo-navigation.service';
import { getDynamicForm_B } from 'src/app/ts-demos/demo-navigation/form-b/form-b.form';
import { DynamicForm } from 'src/app/ts-dynamic-form/form';

@Component({
  selector: 'app-form-b',
  templateUrl: './form-b.component.html',
  styleUrls: ['./form-b.component.css'],
})
export class FormBComponent {
  form!: DynamicForm;
  title = 'Form B';

  constructor(public formService: DemoDynamicNavigationService) {}

  ngOnInit(): void {
    this.form = getDynamicForm_B();
  }
}
