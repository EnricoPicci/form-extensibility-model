import { DynamicForm } from 'src/app/ts-dynamic-form/form';

import { TextboxQuestion } from 'src/app/ts-dynamic-form/questions/question-textbox';
import { getPrevious, getSave } from './form-c.actions';
import { Action } from 'src/app/ts-dynamic-form/actions/action';

export function getDynamicForm_C() {
  const formObj = new DynamicForm({
    title: 'Dynamic Form C',
  });

  formObj.elements = [
    new TextboxQuestion({
      key: 'field-c',
      label: 'Field-c',
      value: '',
      required: true,
      order: 1,
    }),

    new Action({
      name: 'Previous',
      function: getPrevious(formObj),
      order: 3,
    }),
    new Action({
      name: 'Save',
      function: getSave(formObj),
      order: 2,
    }),
  ];

  return formObj;
}
