import { Component } from '@angular/core';
import { getDynamicValidationForm } from 'src/app/ts-demos/demo-dynamic-validation-call/demo-dynamic-validation-call.form';
import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import { FormStateService } from 'src/app/ts-dynamic-form/services/form-state-service';

@Component({
  selector: 'app-validation-call',
  templateUrl: './validation-call.component.html',
  styleUrls: ['./validation-call.component.css'],
  providers: [FormStateService],
})
export class ValidationCallComponent {
  form!: DynamicFormLayout;
  title = 'Dynamic Validation Call Form';

  constructor() {}

  ngOnInit(): void {
    this.form = getDynamicValidationForm();
  }
}
