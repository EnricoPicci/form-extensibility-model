import { DynamicFormLayout as DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { TextboxQuestion } from 'src/app/ts-dynamic-form/questions/question-textbox';
import { Action } from 'src/app/ts-dynamic-form/actions/action';
import { getPrevious, getTransitFrom_B_to_C } from './form-b.actions';

export function get_Form_B_Layout() {
  const formLayout = new DynamicFormLayout({
    title: 'Product Dialogue Form B',
  });

  formLayout.elements = [
    new TextboxQuestion({
      key: 'field-B-Product',
      label: 'Field-B-Product',
      value: '',
      order: 1,
    }),

    new Action({
      name: 'Next',
      function: getTransitFrom_B_to_C(formLayout),
      order: 2,
    }),
    new Action({
      name: 'Previous',
      function: getPrevious(formLayout),
      order: 3,
    }),
  ];

  return formLayout;
}
