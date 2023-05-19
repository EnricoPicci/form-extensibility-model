import { Component, OnInit } from '@angular/core';

import { QuestionBase } from '../../ts-dynamic-form/questions/question-base';
import { getProductIdentificationDataQuestions } from '../../ts-product/form-identification-data/form-identification-data.model';
import { Action } from '../../ts-dynamic-form/actions/action';
import { getProductIdentificationDataActions } from 'src/app/ts-product/form-identification-data/form-identification-data.actions';

@Component({
  selector: 'app-product-form-identification-data',
  templateUrl: './form-identification-data.component.html',
  styleUrls: ['./form-identification-data.component.css'],
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
