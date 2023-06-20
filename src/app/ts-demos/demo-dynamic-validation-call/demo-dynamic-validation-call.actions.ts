import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { FormStateService } from 'src/app/ts-dynamic-form/services/form-state-service';
import { enableDriverName } from './demo-dynamic-validation-call.service';

export function getEnableDriverName(formObj: DynamicFormLayout) {
  return (formGroupValue: any, stateService: FormStateService, event: any) => {
    enableDriverName(formGroupValue, formObj, stateService);
  };
}
