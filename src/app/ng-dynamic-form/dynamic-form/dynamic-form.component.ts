import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { toFormGroup } from './form-group-questions-convertions';
import { STATE_SERVICE } from '../../state.service';

import { QuestionBase } from '../../ts-dynamic-form/questions/question-base';
import { Action } from '../../ts-dynamic-form/actions/action';
import { StateService } from '../../ts-state/state-service';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<any>[] | null = [];
  @Input() actions!: Action[];

  form!: FormGroup;
  messages: string[] = [];

  constructor(@Inject(STATE_SERVICE) public stateService: StateService) {}

  ngOnInit() {
    this.form = toFormGroup(this.questions as QuestionBase<any>[]);

    this.stateService.message$.subscribe((message) => {
      this.messages.push(message);
    });
  }
}
