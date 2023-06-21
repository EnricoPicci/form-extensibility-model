import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { FormStateService } from 'src/app/ts-dynamic-form/services/form-state-service';
import { fillCity } from './demo-dynamic-dropdown.functions';

export function getFillCity(formObj: DynamicFormLayout) {
  return (formGroupValue: any, stateService: FormStateService, event: any) => {
    fillCity(formGroupValue, formObj, stateService);
  };
}
