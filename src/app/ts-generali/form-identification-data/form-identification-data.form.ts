import { DropdownQuestion } from 'src/app/ts-dynamic-form/questions/question-dropdown';
import { getProductIdentificationDataForm } from 'src/app/ts-product/form-identification-data/form-identification-data.form';
import { generaliSave } from './form-identification-data.actions';

export function getGeneraliIdentificationDataForm() {
  const venetoQuestion = new DropdownQuestion({
    key: 'veneto',
    label: 'veneto',
    options: [
      { key: 'yes', value: 'Yes' },
      { key: 'no', value: 'No' },
    ],
    order: 3,
  });

  const identificationDataForm = getProductIdentificationDataForm();

  identificationDataForm.elements.push(venetoQuestion); // add the question after the Basic Information section

  const saveAction = identificationDataForm.getUniqueAction('Save');
  saveAction.function = generaliSave; // replace the action defined in the product form with the Generali action

  identificationDataForm.title = 'Generali Identification Data Form';
  return identificationDataForm;
}
