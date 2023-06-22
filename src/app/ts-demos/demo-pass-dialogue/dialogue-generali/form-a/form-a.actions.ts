import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import { DialogueState } from 'src/app/ts-dynamic-form/services/dialogue-state';

import { toFormC } from '../dialogue-product-generali.functions';

export function getToFormC(formLayout: DynamicFormLayout) {
  return (formGroupValue: any, stateService: DialogueState, event: any) => {
    //
    // here is the logic to implement
    // call the form service appropriate method
    toFormC(formGroupValue, stateService);
  };
}
