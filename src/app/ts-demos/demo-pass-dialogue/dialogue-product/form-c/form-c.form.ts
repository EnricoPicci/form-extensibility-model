import { DynamicFormLayout as DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { TextboxQuestion } from 'src/app/ts-dynamic-form/questions/question-textbox';
import { Action } from 'src/app/ts-dynamic-form/actions/action';
import { getPrevious, getSave } from './form-c.actions';

export function get_Form_C_Layout() {
  const formLayout = new DynamicFormLayout({
    title: 'Product Dialogue Form B',
  });

  formLayout.elements = [
    new TextboxQuestion({
      key: 'field-C-Product',
      label: 'Field-C-Product',
      value: '',
      required: true,
      order: 1,
    }),

    new Action({
      name: 'Previous',
      function: getPrevious(formLayout),
      order: 3,
    }),
    new Action({
      name: 'Save',
      function: getSave(formLayout),
      order: 2,
    }),
  ];

  return formLayout;
}
