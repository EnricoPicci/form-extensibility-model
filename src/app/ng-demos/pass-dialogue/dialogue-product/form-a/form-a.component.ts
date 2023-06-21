import { Component } from '@angular/core';
import { FormStateService } from 'src/app/ts-dynamic-form/services/form-state-service';
import { get_Form_A_Layout } from 'src/app/ts-demos/demo-pass-dialogue/dialogue-product/form-a/form-a.form';
import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.css'],
})
export class FormAComponent {
  form!: DynamicFormLayout;
  get title() {
    return `${this.stateService.dialogueName} - Form A`;
  }

  constructor(private stateService: FormStateService) {}

  ngOnInit(): void {
    this.form = get_Form_A_Layout();
  }
}
