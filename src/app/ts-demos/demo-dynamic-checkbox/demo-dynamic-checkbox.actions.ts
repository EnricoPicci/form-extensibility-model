import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { FormStateService } from 'src/app/ts-dynamic-form/services/form-state-service';
import { enableVat } from './demo-dynamic-checkbox.functions';

export function getEnableVat(formLayout: DynamicFormLayout) {
  return (formGroupValue: any, stateService: FormStateService, event: any) => {
    enableVat(formGroupValue, formLayout, stateService);
  };
}
