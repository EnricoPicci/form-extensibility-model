import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../questions/question-base';
import { QuestionControlService } from '../questions/question-control.service';
import { FormProcessor } from './form-processor';

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

  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    if (!this.formProcessor) {
      throw new Error('formProcessor is required');
    }
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<any>[]);
  }

  onSubmit() {
    this.payLoad = this.formProcessor.processForm(this.form);
  }
}
