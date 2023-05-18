import { Component, OnInit } from '@angular/core';
import { QuestionBase } from '../questions/question-base';
import { getProductIdentificationDataQuestions } from './product-form-identification-data.model';
import { ProductFormIdentificationDataService } from './product-form-identification-data.service';

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
