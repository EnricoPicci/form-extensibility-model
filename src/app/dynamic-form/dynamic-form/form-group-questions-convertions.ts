import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from '../../dynamic-form-ts/questions/question-base';

export function fromFormGroup(form: FormGroup) {
  return form.value;
}

export function toFormGroup(questions: QuestionBase<any>[]) {
  const group: any = {};

  questions.forEach((question) => {
    group[question.key] = question.required
      ? new FormControl(question.value || '', Validators.required)
      : new FormControl(question.value || '');
  });
  return new FormGroup(group);
}
