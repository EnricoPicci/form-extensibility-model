import { DynamicForm } from 'src/app/ts-dynamic-form/form';

import { TextboxQuestion } from 'src/app/ts-dynamic-form/questions/question-textbox';
import { getEnablePlate } from './demo-dynamic-onblur.actions';

export function getDynamicOnblurForm() {
  const formObj = new DynamicForm({
    title: 'Dynamic Onblur Form',
  });

  formObj.elements = [
    new TextboxQuestion({
      key: 'carBrand',
      label: 'Car Brand',
      value: '',
      required: false,
      order: 1,
      onBlurHandler: getEnablePlate(formObj),
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

  return formObj;
}
