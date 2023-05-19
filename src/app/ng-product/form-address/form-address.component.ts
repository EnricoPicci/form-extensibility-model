import { Component } from '@angular/core';

import { Action } from 'src/app/ts-dynamic-form/actions/action';
import { QuestionBase } from 'src/app/ts-dynamic-form/questions/question-base';

import { getProductAddressActions } from 'src/app/ts-product/form-address/form-address.actions';
import { getProductAddressQuestions } from 'src/app/ts-product/form-address/form-address.model';

@Component({
  selector: 'app-product-form-address',
  templateUrl: './form-address.component.html',
  styleUrls: ['./form-address.component.css'],
})
export class ProductFormAddressComponent {
  questions!: QuestionBase<any>[];
  actions!: Action[];

  constructor() {}

  ngOnInit(): void {
    this.questions = getProductAddressQuestions();
    this.actions = getProductAddressActions();
  }
}
