import { DynamicForm } from 'src/app/ts-dynamic-form/form';

import { TextboxQuestion } from 'src/app/ts-dynamic-form/questions/question-textbox';
import { getNext } from './form-a.actions';
import { Action } from 'src/app/ts-dynamic-form/actions/action';

export function getDynamicForm_A() {
  const formObj = new DynamicForm({
    title: 'Dynamic Form A',
  });

  formObj.elements = [
    new TextboxQuestion({
      key: 'field-a',
      label: 'Field-a',
      value: '',
      required: true,
      order: 1,
    }),

    new Action({
      name: 'Next',
      function: getNext(formObj),
      order: 2,
    }),
  ];

  return formObj;
}
