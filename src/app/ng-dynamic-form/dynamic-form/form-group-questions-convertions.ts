import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DynamicForm } from 'src/app/ts-dynamic-form/form';

export function toFormGroup(formObj: DynamicForm) {
  const group: any = {};

  const questions = formObj.getAllQuestions();
  questions.forEach((question) => {
    let val = question.value;
    if (val === undefined || val === null) {
      val = '';
    }

    const fc = question.required
      ? new FormControl(val, Validators.required)
      : new FormControl(val);

    question.enabled === false ? fc.disable() : fc.enable();

    group[question.key] = fc;
  });
  return new FormGroup(group);
}
