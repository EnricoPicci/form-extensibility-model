import { DynamicFormLayout as DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { TextboxQuestion } from 'src/app/ts-dynamic-form/questions/question-textbox';
import { Action } from 'src/app/ts-dynamic-form/actions/action';
import { getNext } from './form-a.actions';

export function get_Form_A_Layout() {
  const formLayout = new DynamicFormLayout({
    title: 'Product Dialogue Form A',
  });

  formLayout.elements = [
    new TextboxQuestion({
      key: 'field-a-Product',
      label: 'Field-a-Product',
      value: '',
      required: true,
      order: 1,
    }),

    new Action({
      name: 'Next',
      function: getNext(formLayout),
      order: 2,
    }),
  ];

  return formLayout;
}
