import { Component } from '@angular/core';
import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import { getDynamicCheckboxForm } from 'src/app/ts-demos/demo-dynamic-checkbox/demo-dynamic-checkbox.form';
import { DialogueState } from 'src/app/ts-dynamic-form/services/dialogue-state';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [DialogueState],
})
export class CheckboxComponent {
  form!: DynamicFormLayout;
  title = 'Dynamic Checkbox Form';

  constructor() {}

  ngOnInit(): void {
    this.form = getDynamicCheckboxForm();
  }
}
