import { Component } from '@angular/core';
import { NgStateService } from 'src/app/ng-dynamic-forms/ng-state.service';
import { Dialogue_ProductService } from 'src/app/ts-demos/demo-pass-dialogue/dialogue-product/dialogue-product.service';
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

  constructor(
    public dialogueFormService: Dialogue_ProductService,
    private stateService: NgStateService
  ) {}

  ngOnInit(): void {
    this.form = get_Form_A_Layout();
  }
}
