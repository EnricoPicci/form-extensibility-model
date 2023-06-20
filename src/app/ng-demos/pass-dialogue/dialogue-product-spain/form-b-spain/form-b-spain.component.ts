import { Component } from '@angular/core';
import { NgStateService } from 'src/app/ng-dynamic-forms/ng-state.service';
import { getFormXSpainLayout as getFormBSpainLayout } from 'src/app/ts-demos/demo-pass-dialogue/dialogue-product-spain/form-b/form-b.form';
import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

@Component({
  selector: 'app-form-b-spain',
  templateUrl: './form-b-spain.component.html',
  styleUrls: ['./form-b-spain.component.css'],
})
export class FormBSpainComponent {
  form!: DynamicFormLayout;
  get title() {
    return `${this.stateService.dialogueName} - Form B`;
  }

  constructor(private stateService: NgStateService) {}

  ngOnInit(): void {
    this.form = getFormBSpainLayout();
  }
}
