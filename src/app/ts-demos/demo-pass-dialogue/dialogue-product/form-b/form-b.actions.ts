import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { FormStateService } from 'src/app/ts-dynamic-form/services/form-state-service';
import { next, transitFrom_B_to_C } from '../dialogue-product.service';

export function getNext(formObj: DynamicFormLayout) {
  return (formGroupValue: any, stateService: FormStateService, event: any) => {
    //
    // here is the logic to implement
    // call the form service appropriate method
    next(formGroupValue, 'form-c', stateService);
  };
}

export function getPrevious(formObj: DynamicFormLayout) {
  return (formGroupValue: any, stateService: FormStateService, event: any) => {
    //
    // here is the logic to implement
    // call the form service appropriate method
    next(formGroupValue, 'form-a', stateService);
  };
}

export function getTransitFrom_B_to_C(formObj: DynamicFormLayout) {
  return (formGroupValue: any, stateService: FormStateService, event: any) => {
    //
    // here is the logic to implement
    // call the form service appropriate method
    transitFrom_B_to_C(formGroupValue, stateService);
  };
}
