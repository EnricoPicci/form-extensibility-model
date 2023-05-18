import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../ts-questions/question-base';
import { FormProcessor } from '../ts-form-processor/form-processor';
import { toFormGroup } from './form-group-questions-convertions';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<any>[] | null = [];
  @Input() formProcessor!: FormProcessor;

  form!: FormGroup;
  payLoad = '';

  constructor() {}

  ngOnInit() {
    if (!this.formProcessor) {
      throw new Error('formProcessor is required');
    }
    this.form = toFormGroup(this.questions as QuestionBase<any>[]);
  }

  onSubmit() {
    this.payLoad = this.formProcessor.processForm(this.form);
  }
}
