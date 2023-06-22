import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { DialogueState } from 'src/app/ts-dynamic-form/services/dialogue-state';
import { enableDriverName } from './demo-dynamic-validation-call.functions';

export function getEnableDriverName(formLayout: DynamicFormLayout) {
  return (formGroupValue: any, stateService: DialogueState, event: any) => {
    enableDriverName(formGroupValue, formLayout, stateService);
  };
}
