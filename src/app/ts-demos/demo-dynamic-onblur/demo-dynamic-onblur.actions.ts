import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { FormStateService } from 'src/app/ts-dynamic-form/services/form-state-service';
import { enablePlate } from './demo-dynamic-onblur.functions';

export function getEnablePlate(formObj: DynamicFormLayout) {
  return (formGroupValue: any, stateService: FormStateService, event: any) => {
    enablePlate(formObj, formGroupValue, stateService);
  };
}
