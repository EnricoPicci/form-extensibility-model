import { Component } from '@angular/core';

import { Action } from 'src/app/ts-dynamic-form/actions/action';
import { QuestionBase } from 'src/app/ts-dynamic-form/questions/question-base';

import { getGeneraliAddressActions } from 'src/app/ts-generali/form-address/form-address.actions';
import { getGeneraliAddressQuestions } from 'src/app/ts-generali/form-address/form-address.model';

@Component({
  selector: 'app-generali-form-address',
  templateUrl: './generali-form-address.component.html',
  styleUrls: ['./generali-form-address.component.css'],
})
export class GeneraliFormAddressComponent {
  questions!: QuestionBase<any>[];
  actions!: Action[];
  title = 'Generali Address Form';

  constructor() {}

  ngOnInit(): void {
    this.questions = getGeneraliAddressQuestions();
    this.actions = getGeneraliAddressActions();
  }
}
