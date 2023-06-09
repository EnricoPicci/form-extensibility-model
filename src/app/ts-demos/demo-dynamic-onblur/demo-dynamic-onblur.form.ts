import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { TextboxQuestion } from 'src/app/ts-dynamic-form/questions/question-textbox';
import { getEnablePlate } from './demo-dynamic-onblur.actions';

export function getDynamicOnblurForm() {
  const formLayout = new DynamicFormLayout({
    title: 'Dynamic Onblur Form',
  });

  formLayout.elements = [
    new TextboxQuestion({
      key: 'carBrand',
      label: 'Car Brand',
      value: '',
      required: false,
      order: 1,
      onBlurHandler: getEnablePlate(formLayout),
    }),
    new TextboxQuestion({
      key: 'plate',
      label: 'Plate',
      value: '',
      required: false,
      enabled: false,
      order: 2,
    }),
  ];

  return formLayout;
}
