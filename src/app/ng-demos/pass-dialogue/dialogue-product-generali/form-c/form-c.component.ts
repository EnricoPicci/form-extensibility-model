import { Component } from '@angular/core';
import { getFormCGeneraliLayout } from 'src/app/ts-demos/demo-pass-dialogue/dialogue-generali/form-c/form-c.form';
import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import { DialogueState } from 'src/app/ts-dynamic-form/services/dialogue-state';

@Component({
  selector: 'app-form-c',
  templateUrl: './form-c.component.html',
  styleUrls: ['./form-c.component.css'],
})
export class FormCGeneraliComponent {
  form!: DynamicFormLayout;
  get title() {
    return `${this.stateService.dialogueName} - Form C`;
  }

  constructor(private stateService: DialogueState) {}

  ngOnInit(): void {
    this.form = getFormCGeneraliLayout();
    console.log(
      '>>>>>>>>>>>>>>>>>>>>>> formLayout in Component C for Generali',
      this.form
    );
  }
}
