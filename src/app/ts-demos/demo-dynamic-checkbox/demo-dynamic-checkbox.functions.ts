import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { DialogueState } from 'src/app/ts-dynamic-form/services/dialogue-state';

export function enableVat(
  formGroupValue: any,
  formObj: DynamicFormLayout,
  stateService: DialogueState
) {
  const isBusiness = formGroupValue.business;
  const vat = formObj.getUniqueQuestion('vat');

  vat.enabled = isBusiness;
  stateService.updateFormLayout(formObj);

  formGroupValue.vat = isBusiness ? vat.value : ''; // reset the value of vat
  stateService.formValue = formGroupValue;
}
