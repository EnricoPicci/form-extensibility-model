import { Component, Inject, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../../ts-dynamic-form/questions/question-base';
import { STATE_SERVICE } from 'src/app/state.service';
import { StateService } from 'src/app/ts-state/state-service';
import { DropdownQuestionOptions } from 'src/app/ts-dynamic-form/questions/question-dropdown';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css'],
})
export class DynamicFormQuestionComponent {
  @Input() question!: QuestionBase<any>;
  @Input() form!: FormGroup;

  constructor(@Inject(STATE_SERVICE) public stateService: StateService) {}

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

  onDropDownChange(event: any) {
    const dropDownQuestion = this.question as DropdownQuestionOptions;
    if (dropDownQuestion.onChangeHandler) {
      dropDownQuestion.onChangeHandler(
        this.form.value,
        this.stateService,
        event
      );
    }
  }
}
