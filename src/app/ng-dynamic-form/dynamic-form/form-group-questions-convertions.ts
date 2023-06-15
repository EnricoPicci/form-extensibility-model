import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DynamicForm } from 'src/app/ts-dynamic-form/form';

export function toFormGroup(formObj: DynamicForm) {
  const group: any = {};

  const questions = formObj.getAllQuestions();
  questions.forEach((question) => {
    group[question.key] = question.required
      ? new FormControl(question.value || '', Validators.required)
      : new FormControl(question.value || '');
  });
  return new FormGroup(group);
}
