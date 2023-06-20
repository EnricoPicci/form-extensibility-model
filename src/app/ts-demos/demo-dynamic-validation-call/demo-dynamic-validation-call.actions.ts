import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import { DynamicFormService } from 'src/app/ts-dynamic-form/services/form-service';
import { StateService } from 'src/app/ts-dynamic-form/services/state-service';
import { enableDriverName } from './demo-dynamic-validation-call.service';

export function getEnableDriverName(formObj: DynamicFormLayout) {
  return (
    formGroupValue: any,
    stateService: StateService,
    dynamicFormService: DynamicFormService,
    event: any
  ) => {
    enableDriverName(formGroupValue, formObj, stateService, dynamicFormService);
  };
}
