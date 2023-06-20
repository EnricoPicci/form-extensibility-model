import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import { DynamicFormService } from 'src/app/ts-dynamic-form/services/form-service';
import { StateService } from 'src/app/ts-dynamic-form/services/state-service';
import { next, transitFrom_B_to_C } from '../dialogue-product.service';

export function getNext(formObj: DynamicFormLayout) {
  return (
    formGroupValue: any,
    stateService: StateService,
    dynamicFormService: DynamicFormService,
    event: any
  ) => {
    //
    // here is the logic to implement
    // call the form service appropriate method
    next(formGroupValue, 'form-c', stateService, dynamicFormService);
  };
}

export function getPrevious(formObj: DynamicFormLayout) {
  return (
    formGroupValue: any,
    stateService: StateService,
    dynamicFormService: DynamicFormService,
    event: any
  ) => {
    //
    // here is the logic to implement
    // call the form service appropriate method
    next(formGroupValue, 'form-a', stateService, dynamicFormService);
  };
}

export function getTransitFrom_B_to_C(formObj: DynamicFormLayout) {
  return (
    formGroupValue: any,
    stateService: StateService,
    dynamicFormService: DynamicFormService,
    event: any
  ) => {
    //
    // here is the logic to implement
    // call the form service appropriate method
    transitFrom_B_to_C(formGroupValue, stateService);
  };
}
