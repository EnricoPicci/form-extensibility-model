import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { TextboxQuestion } from 'src/app/ts-dynamic-form/questions/question-textbox';
import { getNext, getPrevious } from './form-b.actions';
import { Action } from 'src/app/ts-dynamic-form/actions/action';

export function getDynamicForm_B() {
  const formObj = new DynamicFormLayout({
    title: 'Dynamic Form 2',
  });

  formObj.elements = [
    new TextboxQuestion({
      key: 'field-b',
      label: 'Field-B',
      value: '',
      required: true,
      order: 1,
    }),

    new Action({
      name: 'Next',
      function: getNext(formObj),
      order: 2,
    }),
    new Action({
      name: 'Previous',
      function: getPrevious(formObj),
      order: 3,
    }),
  ];

  return formObj;
}
