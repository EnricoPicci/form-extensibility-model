import { Component } from '@angular/core';
import { getDynamicDropdownForm } from 'src/app/ts-demos/demo-dynamic-dropdown/demo-dynamic-dropdown.form';
import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import { DialogueState } from 'src/app/ts-dynamic-form/services/dialogue-state';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [DialogueState],
})
export class DropdownComponent {
  form!: DynamicFormLayout;
  title = 'Dynamic Dropdown Form';

  constructor() {}

  ngOnInit(): void {
    this.form = getDynamicDropdownForm();
  }
}
