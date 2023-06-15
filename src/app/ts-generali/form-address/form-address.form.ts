import { TextboxQuestion } from 'src/app/ts-dynamic-form/questions/question-textbox';
import { Section } from 'src/app/ts-dynamic-form/section';
import { getProductAddressForm } from 'src/app/ts-product/form-address/form-address.form';
import { generaliSave } from './form-address.actions';

export function getGeneraliAddressForm() {
  const stateSection = new Section({
    name: 'State',
    order: 2, // this order number makes sure the section is displayed after the Basic Information section
    elements: [
      new TextboxQuestion({
        key: 'state',
        label: 'State',
        value: '',
        required: true,
        order: 2,
      }),
    ],
  });

  const addressForm = getProductAddressForm();
  addressForm.elements.push(stateSection);
  const saveAction = addressForm.getUniqueAction('Save');
  addressForm.removeAction(saveAction); // remove the action defined in the product form

  saveAction.order = 3; // this order number makes sure the action is displayed after the State section
  saveAction.function = generaliSave; // replace the action defined in the product form with the Generali action
  stateSection.elements.push(saveAction); // add the action after the State section

  addressForm.title = 'Generali Address Form';
  return addressForm;
}
