import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import { FormStateService } from 'src/app/ts-dynamic-form/services/form-state-service';

import { toFormC } from '../dialogue-product-generali.functions';

export function getToFormC(formObj: DynamicFormLayout) {
  return (formGroupValue: any, stateService: FormStateService, event: any) => {
    //
    // here is the logic to implement
    // call the form service appropriate method
    toFormC(formGroupValue, stateService);
  };
}
