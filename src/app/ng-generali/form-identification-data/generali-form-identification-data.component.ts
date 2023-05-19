import { Component } from '@angular/core';

import { QuestionBase } from '../../ts-dynamic-form/questions/question-base';
import { Action } from '../../ts-dynamic-form/actions/action';

import { getGeneraliIdentificationDataQuestions } from '../../ts-generali/form-identification-data/form-identification-data.model';
import { getGeneraliIdentificationDataActions } from '../../ts-generali/form-identification-data/form-identification-data.actions';

@Component({
  selector: 'app-generali-form-identification-data',
  templateUrl: './generali-form-identification-data.component.html',
  styleUrls: ['./generali-form-identification-data.component.css'],
})
export class GeneraliFormIdentificationDataComponent {
  questions!: QuestionBase<any>[];
  actions!: Action[];

  constructor() {}

  ngOnInit(): void {
    this.questions = getGeneraliIdentificationDataQuestions();
    this.actions = getGeneraliIdentificationDataActions();
  }
}
