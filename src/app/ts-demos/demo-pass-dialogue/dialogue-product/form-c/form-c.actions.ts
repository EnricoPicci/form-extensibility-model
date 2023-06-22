import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { DialogueState } from 'src/app/ts-dynamic-form/services/dialogue-state';
import { next, save } from '../dialogue-product.functions';

export function getPrevious(formLayout: DynamicFormLayout) {
  return (formGroupValue: any, stateService: DialogueState, event: any) => {
    //
    // here is the logic to implement
    // call the form service appropriate method
    next(formGroupValue, 'form-b', stateService);
  };
}

export function getSave(formLayout: DynamicFormLayout) {
  return (formGroupValue: any, stateService: DialogueState, event: any) => {
    //
    // here is the logic to implement
    // call the form service appropriate method
    save(formGroupValue, 'form-d', stateService);
  };
}
