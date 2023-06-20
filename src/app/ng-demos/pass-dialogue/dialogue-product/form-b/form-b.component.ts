import { Component } from '@angular/core';
import { NgStateService } from 'src/app/ng-dynamic-forms/ng-state.service';
import { Dialogue_ProductService } from 'src/app/ts-demos/demo-pass-dialogue/dialogue-product/dialogue-product.service';
import { get_Form_B_Layout } from 'src/app/ts-demos/demo-pass-dialogue/dialogue-product/form-b/form-b.form';
import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

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

  constructor(
    public dialogueFormService: Dialogue_ProductService,
    private stateService: NgStateService
  ) {}

  ngOnInit(): void {
    this.form = get_Form_B_Layout();
  }
}
