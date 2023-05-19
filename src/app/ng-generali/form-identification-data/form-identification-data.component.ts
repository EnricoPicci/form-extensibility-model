import { Component } from '@angular/core';
import { getProductIdentificationDataQuestions } from '../../ts-product/form-identification-data/form-identification-data.model';
import { QuestionBase } from '../../ts-dynamic-form/questions/question-base';
import { GeneraliFormIdentificationDataService } from './generali-form-identification-data.service';
import { getGeneraliIdentificationDataQuestions } from './form-identification-data.model';

@Component({
  selector: 'app-generali-form-identification-data',
  templateUrl: './form-identification-data.component.html',
  styleUrls: ['./form-identification-data.component.css'],
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
