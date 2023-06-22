import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { DialogueState } from 'src/app/ts-dynamic-form/services/dialogue-state';

export function enablePlate(
  formLayout: DynamicFormLayout,
  formValue: any,
  stateService: DialogueState
) {
  const carBrand = formValue.carBrand;
  const plateQuestion = formLayout.getUniqueQuestion('plate');

  plateQuestion.enabled = carBrand.trim().length > 3;
  stateService.updateFormLayout(formLayout);

  // reset the value of plate if plate is disabled
  formValue.plate = plateQuestion.enabled ? formValue.plate : '';
  stateService.formValue = formValue;
}
