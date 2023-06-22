import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { DropdownQuestion } from 'src/app/ts-dynamic-form/questions/question-dropdown';
import { getFillCity } from './demo-dynamic-dropdown.actions';

export function getDynamicDropdownForm() {
  const formLayout = new DynamicFormLayout({
    title: 'Dynamic Dropdown',
  });

  formLayout.elements = [
    new DropdownQuestion({
      key: 'country',
      label: 'Country',
      options: [
        { key: 'italy', value: 'Italy' },
        { key: 'france', value: 'France' },
      ],
      order: 1,
      onChangeHandler: getFillCity(formLayout),
    }),
    new DropdownQuestion({
      key: 'city',
      label: 'City',
      options: [],
      order: 3,
    }),
  ];

  return formLayout;
}
