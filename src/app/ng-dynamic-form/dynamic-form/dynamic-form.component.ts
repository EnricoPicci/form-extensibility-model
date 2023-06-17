import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { toFormGroup } from './form-group-questions-convertions';

import { FormService } from '../../ts-state/form-service';
import { DynamicForm, DynamicFormElement } from 'src/app/ts-dynamic-form/form';
import { QuestionBase } from 'src/app/ts-dynamic-form/questions/question-base';
import { Action } from 'src/app/ts-dynamic-form/actions/action';
import { Section } from 'src/app/ts-dynamic-form/section';
import { STATE_SERVICE } from 'src/app/state.service';
import { StateService } from 'src/app/ts-state/state-service';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [FormService],
})
export class DynamicFormComponent implements OnInit {
  @Input() formObj!: DynamicForm;
  @Input() title!: string;

  form!: FormGroup;
  elements: DynamicFormElement[] = [];
  messages: string[] = [];

  constructor(
    @Inject(STATE_SERVICE) public state: StateService,
    public formService: FormService
  ) {}

  ngOnInit() {
    this.form = toFormGroup(this.formObj);

    this.elements = this.formObj.getElementsOrdered();

    this.state.message$.subscribe((message) => {
      console.log('|||||||||||||||||||||||message', message);
      this.messages.push(message);
    });
  }

  asSection(element: DynamicFormElement) {
    return element as Section;
  }
  asQuestion(element: DynamicFormElement) {
    return element as QuestionBase<any>;
  }
  asAction(element: DynamicFormElement) {
    return element as Action;
  }
}
