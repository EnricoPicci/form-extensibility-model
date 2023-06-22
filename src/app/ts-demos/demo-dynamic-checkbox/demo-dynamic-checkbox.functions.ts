import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { DialogueState } from 'src/app/ts-dynamic-form/services/dialogue-state';

export function enableVat(
  formValue: any,
  formLayout: DynamicFormLayout,
  stateService: DialogueState
) {
  const isBusiness = formValue.business;
  const vat = formLayout.getUniqueQuestion('vat');

  vat.enabled = isBusiness;
  stateService.updateFormLayout(formLayout);

  formValue.vat = isBusiness ? vat.value : ''; // reset the value of vat
  stateService.formValue = formValue;
}
