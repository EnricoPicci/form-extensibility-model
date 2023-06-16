import { Component, Inject, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { map } from 'rxjs';

import { QuestionBase } from '../../ts-dynamic-form/questions/question-base';
import { STATE_SERVICE } from 'src/app/state.service';
import { StateService } from 'src/app/ts-state/state-service';
import {
  DropdownQuestion,
  DropdownQuestionOptions,
} from 'src/app/ts-dynamic-form/questions/question-dropdown';
import { TextboxQuestion } from 'src/app/ts-dynamic-form/questions/question-textbox';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css'],
})
export class DynamicFormQuestionComponent {
  @Input() question!: QuestionBase<any>;
  @Input() form!: FormGroup;

  constructor(@Inject(STATE_SERVICE) public stateService: StateService) {}

  questionValue$ = this.stateService.formValue$.pipe(
    map((formValue) => formValue[this.question.key])
  );

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
  get isNotEnabled() {
    return this.question.enabled ? null : true;
  }

  asTextbox(element: QuestionBase<any>) {
    return element as TextboxQuestion;
  }

  asDropDown(element: QuestionBase<any>) {
    return element as DropdownQuestion<any>;
  }

  onChange(event: any) {
    const question = this.question;
    if (question.onChangeHandler) {
      question.onChangeHandler(this.form.value, this.stateService, event);
    }
  }

  onBlur(event: any) {
    const textQuestion = this.question as TextboxQuestion;
    if (textQuestion.onBlurHandler) {
      textQuestion.onBlurHandler(this.form.value, this.stateService, event);
    }
  }

  onDropDownChange<T>(event: any) {
    const dropDownQuestion = this.question;
    if (dropDownQuestion.onChangeHandler) {
      dropDownQuestion.onChangeHandler(
        this.form.value,
        this.stateService,
        event
      );
    }
  }
}
