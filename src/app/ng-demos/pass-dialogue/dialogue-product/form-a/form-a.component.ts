import { Component } from '@angular/core';
import { DialogueState } from 'src/app/ts-dynamic-form/services/dialogue-state';
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

  constructor(private stateService: DialogueState) {}

  ngOnInit(): void {
    this.form = get_Form_A_Layout();
  }
}
