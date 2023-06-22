import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { DialogueState } from 'src/app/ts-dynamic-form/services/dialogue-state';
import { enableVat } from './demo-dynamic-checkbox.functions';

export function getEnableVat(formLayout: DynamicFormLayout) {
  return (formGroupValue: any, stateService: DialogueState, event: any) => {
    enableVat(formGroupValue, formLayout, stateService);
  };
}
