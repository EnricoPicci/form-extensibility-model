import { Component } from '@angular/core';
import { Dialogue_1_ProductService } from 'src/app/ts-demos/demo-pass-dialogue/dialogue-1-product/dialogue-1-product.service';
import { get_Form_A_Layout } from 'src/app/ts-demos/demo-pass-dialogue/dialogue-1-product/form-a/form-a.form';
import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.css'],
})
export class FormAComponent {
  form!: DynamicFormLayout;
  title = 'Product Form A';

  constructor(public formService: Dialogue_1_ProductService) {}

  ngOnInit(): void {
    this.form = get_Form_A_Layout();
  }
}
