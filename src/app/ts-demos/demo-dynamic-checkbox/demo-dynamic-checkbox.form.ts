import { DynamicForm } from 'src/app/ts-dynamic-form/form';

import { getEnableVat } from './demo-dynamic-checkbox.actions';
import { TextboxQuestion } from 'src/app/ts-dynamic-form/questions/question-textbox';
import { CheckboxQuestion } from 'src/app/ts-dynamic-form/questions/question-checkbox';

export function getDynamicCheckboxForm() {
  const formObj = new DynamicForm({
    title: 'Dynamic Checkbox',
  });

  formObj.elements = [
    new CheckboxQuestion({
      key: 'business',
      label: 'Business',
      value: false,
      order: 1,
      onChangeHandler: getEnableVat(formObj),
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

  return formObj;
}
