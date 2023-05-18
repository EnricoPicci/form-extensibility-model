import { Component, OnInit } from '@angular/core';
import { ProductFormIdentificationDataService } from './product-form-identification-data.service';

import { QuestionBase } from '../ts-questions/question-base';
import { getProductIdentificationDataQuestions } from '../ts-product-form-identification-data/product-form-identification-data.model';

@Component({
  selector: 'app-product-form-identification-data',
  templateUrl: './product-form-identification-data.component.html',
  styleUrls: ['./product-form-identification-data.component.css'],
})
export class ProductFormIdentificationDataComponent implements OnInit {
  questions!: QuestionBase<any>[];

  constructor(public formProcessor: ProductFormIdentificationDataService) {}

  ngOnInit(): void {
    this.questions = getProductIdentificationDataQuestions();
  }
}
