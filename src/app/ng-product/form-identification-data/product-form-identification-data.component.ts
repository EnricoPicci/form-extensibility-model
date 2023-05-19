import { Component, OnInit } from '@angular/core';

import { QuestionBase } from '../../ts-dynamic-form/questions/question-base';
import { Action } from '../../ts-dynamic-form/actions/action';

import { getProductIdentificationDataQuestions } from '../../ts-product/form-identification-data/form-identification-data.model';
import { getProductIdentificationDataActions } from '../../ts-product/form-identification-data/form-identification-data.actions';

@Component({
  selector: 'app-product-form-identification-data',
  templateUrl: './product-form-identification-data.component.html',
  styleUrls: ['./product-form-identification-data.component.css'],
})
export class ProductFormIdentificationDataComponent implements OnInit {
  questions!: QuestionBase<any>[];
  actions!: Action[];

  constructor() {}

  ngOnInit(): void {
    this.questions = getProductIdentificationDataQuestions();
    this.actions = getProductIdentificationDataActions();
  }
}
