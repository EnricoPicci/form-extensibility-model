import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { toFormGroup } from './form-group-questions-convertions';
import { STATE_SERVICE } from '../../state.service';

import { StateService } from '../../ts-state/state-service';
import { DynamicForm, DynamicFormElement } from 'src/app/ts-dynamic-form/form';
import { QuestionBase } from 'src/app/ts-dynamic-form/questions/question-base';
import { Action } from 'src/app/ts-dynamic-form/actions/action';
import { Section } from 'src/app/ts-dynamic-form/section';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  @Input() formObj!: DynamicForm;
  @Input() title!: string;

  form!: FormGroup;
  elements: DynamicFormElement[] = [];
  messages: string[] = [];

  constructor(@Inject(STATE_SERVICE) public stateService: StateService) {}

  ngOnInit() {
    this.form = toFormGroup(this.formObj);

    this.elements = this.formObj.getElementsOrdered();

    this.stateService.message$.subscribe((message) => {
      this.messages.push(message);
    });
  }

  getSection(element: DynamicFormElement) {
    return element as Section;
  }
  getQuestion(element: DynamicFormElement) {
    return element as QuestionBase<any>;
  }
  getAction(element: DynamicFormElement) {
    return element as Action;
  }
}
