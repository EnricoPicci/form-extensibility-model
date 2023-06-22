import { Component } from '@angular/core';
import { get_Form_D_Layout } from 'src/app/ts-demos/demo-pass-dialogue/dialogue-product/form-d/form-d.form';
import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import { DialogueState } from 'src/app/ts-dynamic-form/services/dialogue-state';

@Component({
  selector: 'app-form-d',
  templateUrl: './form-d.component.html',
  styleUrls: ['./form-d.component.css'],
})
export class FormDComponent {
  form!: DynamicFormLayout;
  get title() {
    return `${this.stateService.dialogueName} - Form D`;
  }

  constructor(private stateService: DialogueState) {}

  ngOnInit(): void {
    this.form = get_Form_D_Layout();
  }
}
