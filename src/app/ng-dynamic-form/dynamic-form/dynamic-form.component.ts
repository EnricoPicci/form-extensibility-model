import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { toFormGroup } from './form-group-questions-convertions';

import { QuestionBase } from '../../ts-dynamic-form/questions/question-base';
import { Action } from 'src/app/ts-dynamic-form/actions/action';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<any>[] | null = [];
  @Input() actions!: Action[];

  form!: FormGroup;
  payLoad = '';

  constructor() {}

  ngOnInit() {
    this.form = toFormGroup(this.questions as QuestionBase<any>[]);
  }
}
