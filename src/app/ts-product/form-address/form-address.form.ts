import { TextboxQuestion } from 'src/app/ts-dynamic-form/questions/question-textbox';
import { Section } from 'src/app/ts-dynamic-form/section';
import { Action } from 'src/app/ts-dynamic-form/actions/action';
import { DynamicForm } from 'src/app/ts-dynamic-form/form';

import {
  productSaveAddress,
  productValidateAddress,
} from './form-address.actions';

export function getProductAddressForm() {
  const productAddressForm = new DynamicForm({
    title: 'Product Address',
    components: [
      new Section({
        name: 'Basic Information',
        order: 1,
        elements: [
          new TextboxQuestion({
            key: 'street',
            label: 'Street',
            value: '',
            required: true,
            order: 1,
          }),
          new TextboxQuestion({
            key: 'city',
            label: 'City',
            value: '',
            required: true,
            order: 2,
          }),

          new Action({
            name: 'Save',
            function: productSaveAddress,
            order: 3,
          }),
          new Action({
            name: 'Validate',
            function: productValidateAddress,
            order: 4,
          }),
        ],
      }),
    ],
  });

  return productAddressForm;
}
