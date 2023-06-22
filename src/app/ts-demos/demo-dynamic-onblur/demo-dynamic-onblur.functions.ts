import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { DialogueState } from 'src/app/ts-dynamic-form/services/dialogue-state';

export function enablePlate(
  formObj: DynamicFormLayout,
  formGroupValue: any,
  stateService: DialogueState
) {
  const carBrand = formGroupValue.carBrand;
  const plateQuestion = formObj.getUniqueQuestion('plate');

  plateQuestion.enabled = carBrand.trim().length > 3;
  stateService.updateFormLayout(formObj);

  // reset the value of plate if plate is disabled
  formGroupValue.plate = plateQuestion.enabled ? formGroupValue.plate : '';
  stateService.formValue = formGroupValue;
}
