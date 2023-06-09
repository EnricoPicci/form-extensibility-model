import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { DialogueState } from 'src/app/ts-dynamic-form/services/dialogue-state';
import { enablePlate } from './demo-dynamic-onblur.functions';

export function getEnablePlate(formLayout: DynamicFormLayout) {
  return (formValue: any, stateService: DialogueState, event: any) => {
    enablePlate(formLayout, formValue, stateService);
  };
}
