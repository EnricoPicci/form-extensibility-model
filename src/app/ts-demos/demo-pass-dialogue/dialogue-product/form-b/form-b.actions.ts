import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { DialogueState } from 'src/app/ts-dynamic-form/services/dialogue-state';
import { next, transitFrom_B_to_C } from '../dialogue-product.functions';

export function getNext(formLayout: DynamicFormLayout) {
  return (formGroupValue: any, stateService: DialogueState, event: any) => {
    //
    // here is the logic to implement
    // call the form service appropriate method
    next(formGroupValue, 'form-c', stateService);
  };
}

export function getPrevious(formLayout: DynamicFormLayout) {
  return (formGroupValue: any, stateService: DialogueState, event: any) => {
    //
    // here is the logic to implement
    // call the form service appropriate method
    next(formGroupValue, 'form-a', stateService);
  };
}

export function getTransitFrom_B_to_C(formLayout: DynamicFormLayout) {
  return (formGroupValue: any, stateService: DialogueState, event: any) => {
    //
    // here is the logic to implement
    // call the form service appropriate method
    transitFrom_B_to_C(formGroupValue, stateService);
  };
}
