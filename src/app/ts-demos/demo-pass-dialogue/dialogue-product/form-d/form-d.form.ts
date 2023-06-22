import { DynamicFormLayout as DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { Action } from 'src/app/ts-dynamic-form/actions/action';
import { getContinue } from './form-d.actions';

export function get_Form_D_Layout() {
  const formLayout = new DynamicFormLayout({
    title: 'Product Dialogue Form D',
  });

  formLayout.elements = [
    new Action({
      name: 'Continue',
      function: getContinue(formLayout),
      order: 1,
    }),
  ];

  return formLayout;
}
