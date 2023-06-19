import { Component } from '@angular/core';
import { Dialogue_Product_Spain_Service } from 'src/app/ts-demos/demo-pass-dialogue/dialogue-product-spain/dialogue-product-spain.service';
import { getFormXSpainLayout } from 'src/app/ts-demos/demo-pass-dialogue/dialogue-product-spain/form-b/form-b.form';
import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

@Component({
  selector: 'app-form-b-spain',
  templateUrl: './form-b-spain.component.html',
  styleUrls: ['./form-b-spain.component.css'],
})
export class FormBSpainComponent {
  form!: DynamicFormLayout;
  title = 'Product Form B Spain';

  constructor(public formService: Dialogue_Product_Spain_Service) {}

  ngOnInit(): void {
    this.form = getFormXSpainLayout();
  }
}
