import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { FormStateService } from 'src/app/ts-dynamic-form/services/form-state-service';
import { next, save } from '../dialogue-product.service';

export function getPrevious(formObj: DynamicFormLayout) {
  return (formGroupValue: any, stateService: FormStateService, event: any) => {
    //
    // here is the logic to implement
    // call the form service appropriate method
    next(formGroupValue, 'form-b', stateService);
  };
}

export function getSave(formObj: DynamicFormLayout) {
  return (formGroupValue: any, stateService: FormStateService, event: any) => {
    //
    // here is the logic to implement
    // call the form service appropriate method
    save(formGroupValue, 'form-a', stateService);
  };
}
