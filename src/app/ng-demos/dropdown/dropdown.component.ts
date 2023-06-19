import { Component } from '@angular/core';
import { getDynamicDropdownForm } from 'src/app/ts-demos/demo-dynamic-dropdown/demo-dynamic-dropdown.form';
import { DemoDynamicDropdownService } from 'src/app/ts-demos/demo-dynamic-dropdown/demo-dynamic-dropdown.service';
import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  form!: DynamicFormLayout;
  title = 'Dynamic Dropdown Form';

  constructor(public dialogueFormService: DemoDynamicDropdownService) {}

  ngOnInit(): void {
    this.form = getDynamicDropdownForm();
  }
}
