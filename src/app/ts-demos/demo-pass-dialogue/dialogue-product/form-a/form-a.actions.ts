import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { FormStateService } from 'src/app/ts-dynamic-form/services/form-state-service';
import { next } from '../dialogue-product.service';

export function getNext(formObj: DynamicFormLayout) {
  return (formGroupValue: any, stateService: FormStateService, event: any) => {
    //
    // here is the logic to implement
    // call the form service appropriate method
    next(formGroupValue, 'form-b', stateService);
  };
}
