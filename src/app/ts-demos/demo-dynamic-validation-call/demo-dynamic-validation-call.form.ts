import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { TextboxQuestion } from 'src/app/ts-dynamic-form/questions/question-textbox';
import { getEnableDriverName } from './demo-dynamic-validation-call.actions';

export function getDynamicValidationForm() {
  const formLayout = new DynamicFormLayout({
    title: 'Dynamic Validation Call',
  });

  formLayout.elements = [
    new TextboxQuestion({
      key: 'plate',
      label: 'Plate',
      value: '',
      required: false,
      order: 1,
      onBlurHandler: getEnableDriverName(formLayout),
    }),
    new TextboxQuestion({
      key: 'driverName',
      label: 'Driver Name',
      value: '',
      required: false,
      enabled: false,
      order: 2,
    }),
  ];

  return formLayout;
}
