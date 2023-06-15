import { Section } from 'src/app/ts-dynamic-form/section';
import { Action } from 'src/app/ts-dynamic-form/actions/action';
import { DynamicForm } from 'src/app/ts-dynamic-form/form';
import { DropdownQuestion } from 'src/app/ts-dynamic-form/questions/question-dropdown';
import { TextboxQuestion } from 'src/app/ts-dynamic-form/questions/question-textbox';

import { productSave } from './form-identification-data.actions';

export function getProductIdentificationDataForm() {
  const productAddressForm = new DynamicForm({
    title: 'Product Identification Data',
    components: [
      new Section({
        name: 'Basic Information',
        order: 1,
        elements: [
          new DropdownQuestion({
            key: 'sex',
            label: 'sex',
            options: [
              { key: 'male', value: 'Male' },
              { key: 'female', value: 'Female' },
              { key: 'unspecified', value: 'Prefer not say' },
            ],
            order: 3,
          }),

          new TextboxQuestion({
            key: 'firstName',
            label: 'First name',
            value: '',
            required: true,
            order: 1,
          }),

          new TextboxQuestion({
            key: 'lasttName',
            label: 'Last name',
            value: '',
            required: true,
            order: 2,
          }),

          new TextboxQuestion({
            key: 'emailAddress',
            label: 'Email',
            type: 'email',
            order: 4,
          }),

          new Action({
            name: 'Save',
            function: productSave,
            order: 5,
          }),
        ],
      }),
    ],
  });

  return productAddressForm;
}
