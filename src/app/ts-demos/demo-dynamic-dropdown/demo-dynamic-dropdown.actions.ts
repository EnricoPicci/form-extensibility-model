import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { DialogueState } from 'src/app/ts-dynamic-form/services/dialogue-state';
import { fillCity } from './demo-dynamic-dropdown.functions';

export function getFillCity(formLayout: DynamicFormLayout) {
  return (formValue: any, stateService: DialogueState, event: any) => {
    fillCity(formValue, formLayout, stateService);
  };
}
