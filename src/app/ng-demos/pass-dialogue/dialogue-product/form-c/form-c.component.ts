import { Component } from '@angular/core';
import { Dialogue_1_ProductService } from 'src/app/ts-demos/demo-pass-dialogue/dialogue-1-product/dialogue-1-product.service';
import { get_Form_C_Layout } from 'src/app/ts-demos/demo-pass-dialogue/dialogue-1-product/form-c/form-c.form';
import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

@Component({
  selector: 'app-form-c',
  templateUrl: './form-c.component.html',
  styleUrls: ['./form-c.component.css'],
})
export class FormCComponent {
  form!: DynamicFormLayout;
  title = 'Product Form C';

  constructor(public formService: Dialogue_1_ProductService) {}

  ngOnInit(): void {
    this.form = get_Form_C_Layout();
  }
}
