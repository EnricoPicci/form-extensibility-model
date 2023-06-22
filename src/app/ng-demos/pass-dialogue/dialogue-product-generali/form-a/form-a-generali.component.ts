import { Component } from '@angular/core';

import { getFormAGeneraliLayout } from 'src/app/ts-demos/demo-pass-dialogue/dialogue-generali/form-a/form-a.form';

import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import { DialogueState } from 'src/app/ts-dynamic-form/services/dialogue-state';

@Component({
  selector: 'app-form-a-generali',
  templateUrl: './form-a-generali.component.html',
  styleUrls: ['./form-a-generali.component.css'],
})
export class FormAGeneraliComponent {
  form!: DynamicFormLayout;
  get title() {
    return `${this.stateService.dialogueName} - Form A`;
  }

  constructor(private stateService: DialogueState) {}

  ngOnInit(): void {
    this.form = getFormAGeneraliLayout();
  }
}
