import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { getEnableVat } from './demo-dynamic-checkbox.actions';
import { TextboxQuestion } from 'src/app/ts-dynamic-form/questions/question-textbox';
import { CheckboxQuestion } from 'src/app/ts-dynamic-form/questions/question-checkbox';

export function getDynamicCheckboxForm() {
  const formLayout = new DynamicFormLayout({
    title: 'Dynamic Checkbox',
  });

  formLayout.elements = [
    new CheckboxQuestion({
      key: 'business',
      label: 'Business',
      value: false,
      order: 1,
      onChangeHandler: getEnableVat(formLayout),
    }),
    new TextboxQuestion({
      key: 'vat',
      label: 'Vat',
      value: '',
      required: false,
      enabled: false,
      order: 2,
    }),
  ];

  return formLayout;
}
