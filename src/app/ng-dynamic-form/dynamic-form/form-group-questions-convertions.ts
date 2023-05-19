import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from '../../ts-dynamic-form/questions/question-base';

export function toFormGroup(questions: QuestionBase<any>[]) {
  const group: any = {};

  questions.forEach((question) => {
    group[question.key] = question.required
      ? new FormControl(question.value || '', Validators.required)
      : new FormControl(question.value || '');
  });
  return new FormGroup(group);
}
