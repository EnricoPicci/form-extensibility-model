import { Component, OnInit } from '@angular/core';
import { FormIdentificationDataService } from './form-identification-data.service';

import { QuestionBase } from '../../dynamic-form-ts/questions/question-base';
import { getProductIdentificationDataQuestions } from '../../product-ts/form-identification-data/form-identification-data.model';

@Component({
  selector: 'app-form-identification-data',
  templateUrl: './form-identification-data.component.html',
  styleUrls: ['./form-identification-data.component.css'],
})
export class FormIdentificationDataComponent implements OnInit {
  questions!: QuestionBase<any>[];

  constructor(public formProcessor: FormIdentificationDataService) {}

  ngOnInit(): void {
    this.questions = getProductIdentificationDataQuestions();
  }
}
