import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { toFormGroup } from './form-group-questions-convertions';

import { FormService } from '../../ts-dynamic-form/state/form-service';
import {
  DynamicFormLayout,
  DynamicFormElement,
} from 'src/app/ts-dynamic-form/form';
import { QuestionBase } from 'src/app/ts-dynamic-form/questions/question-base';
import { Action } from 'src/app/ts-dynamic-form/actions/action';
import { Section } from 'src/app/ts-dynamic-form/section';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [FormService],
})
export class DynamicFormComponent implements OnInit {
  @Input() formObj!: DynamicFormLayout;
  @Input() title!: string;
  @Input() formService!: FormService;

  form!: FormGroup;
  elements: DynamicFormElement[] = [];

  constructor() {}

  ngOnInit() {
    this.form = toFormGroup(this.formObj);

    this.elements = this.formObj.getElementsOrdered();

    this.formService.message$.subscribe((message) => {
      console.log(`>>>>>>>>>>>>>> `, message);
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
