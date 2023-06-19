import { Component } from '@angular/core';
import { getDynamicValidationForm } from 'src/app/ts-demos/demo-dynamic-validation-call/demo-dynamic-validation-call.form';
import { DemoDynamicValidationCallService } from 'src/app/ts-demos/demo-dynamic-validation-call/demo-dynamic-validation-call.service';
import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

@Component({
  selector: 'app-validation-call',
  templateUrl: './validation-call.component.html',
  styleUrls: ['./validation-call.component.css'],
})
export class ValidationCallComponent {
  form!: DynamicFormLayout;
  title = 'Dynamic Validation Call Form';

  constructor(public dialogueFormService: DemoDynamicValidationCallService) {}

  ngOnInit(): void {
    this.form = getDynamicValidationForm();
  }
}
