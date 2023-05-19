import { Component, OnInit } from '@angular/core';

import { ProductFormIdentificationDataService } from './form-identification-data.service';

import { QuestionBase } from '../../ts-dynamic-form/questions/question-base';
import { getProductIdentificationDataQuestions } from '../../ts-product/form-identification-data/form-identification-data.model';

@Component({
  selector: 'app-form-identification-data',
  templateUrl: './form-identification-data.component.html',
  styleUrls: ['./form-identification-data.component.css'],
})
export class ProductFormIdentificationDataComponent implements OnInit {
  questions!: QuestionBase<any>[];

  constructor(public formProcessor: ProductFormIdentificationDataService) {}

  ngOnInit(): void {
    this.questions = getProductIdentificationDataQuestions();
  }
}
