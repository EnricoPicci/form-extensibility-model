import { Component } from '@angular/core';
import { Dialogue_1_ProductService } from 'src/app/ts-demos/demo-pass-dialogue/dialogue-1-product/dialogue-1-product.service';
import { get_Form_B_Layout } from 'src/app/ts-demos/demo-pass-dialogue/dialogue-1-product/form-b/form-b.form';
import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

@Component({
  selector: 'app-form-b',
  templateUrl: './form-b.component.html',
  styleUrls: ['./form-b.component.css'],
})
export class FormBComponent {
  form!: DynamicFormLayout;
  title = 'Product Form B';

  constructor(public formService: Dialogue_1_ProductService) {}

  ngOnInit(): void {
    this.form = get_Form_B_Layout();
  }
}
