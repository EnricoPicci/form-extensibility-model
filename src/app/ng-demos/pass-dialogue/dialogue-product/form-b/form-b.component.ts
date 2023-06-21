import { Component } from '@angular/core';
import { get_Form_B_Layout } from 'src/app/ts-demos/demo-pass-dialogue/dialogue-product/form-b/form-b.form';
import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import { FormStateService } from 'src/app/ts-dynamic-form/services/form-state-service';

@Component({
  selector: 'app-form-b',
  templateUrl: './form-b.component.html',
  styleUrls: ['./form-b.component.css'],
})
export class FormBComponent {
  form!: DynamicFormLayout;
  get title() {
    return `${this.stateService.dialogueName} - Form B`;
  }

  constructor(private stateService: FormStateService) {}

  ngOnInit(): void {
    this.form = get_Form_B_Layout();
  }
}
