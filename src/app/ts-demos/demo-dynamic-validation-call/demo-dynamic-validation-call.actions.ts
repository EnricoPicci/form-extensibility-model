import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { DialogueState } from 'src/app/ts-dynamic-form/services/dialogue-state';
import { enableDriverName } from './demo-dynamic-validation-call.functions';

export function getEnableDriverName(formLayout: DynamicFormLayout) {
  return (formValue: any, stateService: DialogueState, event: any) => {
    enableDriverName(formValue, formLayout, stateService);
  };
}
