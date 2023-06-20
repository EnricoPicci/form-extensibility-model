import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import { DynamicFormService } from 'src/app/ts-dynamic-form/services/form-service';
import { StateService } from 'src/app/ts-dynamic-form/services/state-service';
import { next } from '../dialogue-product.service';

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
    next(formGroupValue, 'form-b', stateService, dynamicFormService);
  };
}
