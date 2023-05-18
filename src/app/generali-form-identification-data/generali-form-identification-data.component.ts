import { Component } from '@angular/core';
import { getProductIdentificationDataQuestions } from '../ts-product-form-identification-data/product-form-identification-data.model';
import { QuestionBase } from '../ts-questions/question-base';
import { GeneraliFormIdentificationDataService } from './generali-form-identification-data.service';
import { getGeneraliIdentificationDataQuestions } from './generali-form-identification-data.model';

@Component({
  selector: 'app-generali-form-identification-data',
  templateUrl: './generali-form-identification-data.component.html',
  styleUrls: ['./generali-form-identification-data.component.css'],
})
export class GeneraliFormIdentificationDataComponent {
  questions!: QuestionBase<any>[];

  constructor(public formProcessor: GeneraliFormIdentificationDataService) {}

  ngOnInit(): void {
    this.questions = [
      ...getProductIdentificationDataQuestions(),
      ...getGeneraliIdentificationDataQuestions(),
    ];
  }
}
