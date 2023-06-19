import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { merge, tap } from 'rxjs';

import { QuestionBase } from '../../ts-dynamic-form/questions/question-base';
import {
  DynamicFormService,
  DialogueFormService,
} from 'src/app/ts-dynamic-form/services/form-service';
import { DropdownQuestion } from 'src/app/ts-dynamic-form/questions/question-dropdown';
import { TextboxQuestion } from 'src/app/ts-dynamic-form/questions/question-textbox';
import { StateService } from 'src/app/ts-dynamic-form/services/state-service';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css'],
})
export class DynamicFormQuestionComponent implements OnInit {
  @Input() question!: QuestionBase<any>;
  @Input() form!: FormGroup;
  @Input() dialogueFormService!: DialogueFormService;

  constructor(
    private stateService: StateService,
    private dynamicFormService: DynamicFormService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dynamicFormService.formLayout$
      .pipe(
        tap((formLayout) => {
          const control = this.form.controls[this.question.key];
          if (!control) {
            return;
          }
          const question = formLayout.getUniqueQuestion(this.question.key);
          // the value of enabled must be explicitly set to false if we want to disable the control
          question.enabled !== false ? control.enable() : control.disable();
        })
      )
      .subscribe();

    this.stateService.formValue$
      .pipe(
        tap((formValue) => {
          const val = formValue[this.question.key];
          if (val === undefined || val === null) {
            return;
          }
          const v = val ?? '';
          const control = this.form.controls[this.question.key];
          control.setValue(v);
        })
      )
      .subscribe();

    this.dynamicFormService.nextRoute$
      .pipe(
        tap((nextRoute) => {
          this.router.navigate([nextRoute]);
        })
      )
      .subscribe();
  }

  get isValid() {
    // it looks like a control which is disabled has the valid getter responding false
    // and the invalid getter responds false
    // since a disabled control is not INVALID by definition, then I am using the invalid getter
    return !this.form.controls[this.question.key].invalid;
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
      question.onChangeHandler(
        this.form.value,
        this.stateService,
        this.dynamicFormService,
        this.dialogueFormService,
        event
      );
    }
  }

  onBlur(event: any) {
    const textQuestion = this.question as TextboxQuestion;

    if (textQuestion.onBlurHandler) {
      textQuestion.onBlurHandler(
        this.form.value,
        this.stateService,
        this.dynamicFormService,
        this.dialogueFormService,
        event
      );
    }
  }

  onDropDownChange<T>(event: any) {
    const dropDownQuestion = this.question;
    if (dropDownQuestion.onChangeHandler) {
      dropDownQuestion.onChangeHandler(
        this.form.value,
        this.stateService,
        this.dynamicFormService,
        this.dialogueFormService,
        event
      );
    }
  }
}
