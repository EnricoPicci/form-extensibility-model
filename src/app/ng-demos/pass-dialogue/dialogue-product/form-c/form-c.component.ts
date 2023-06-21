import { Component } from '@angular/core';
import { FormStateService } from 'src/app/ts-dynamic-form/services/form-state-service';
import { get_Form_C_Layout } from 'src/app/ts-demos/demo-pass-dialogue/dialogue-product/form-c/form-c.form';
import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

@Component({
  selector: 'app-form-c',
  templateUrl: './form-c.component.html',
  styleUrls: ['./form-c.component.css'],
})
export class FormCComponent {
  form!: DynamicFormLayout;
  get title() {
    return `${this.stateService.dialogueName} - Form C`;
  }

  constructor(private stateService: FormStateService) {}

  ngOnInit(): void {
    this.form = get_Form_C_Layout();
  }
}
