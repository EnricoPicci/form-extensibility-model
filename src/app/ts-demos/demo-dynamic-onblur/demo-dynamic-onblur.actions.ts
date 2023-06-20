import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import { DynamicFormService } from 'src/app/ts-dynamic-form/services/form-service';
import { StateService } from 'src/app/ts-dynamic-form/services/state-service';
import { enablePlate } from './demo-dynamic-onblur.service';

export function getEnablePlate(formObj: DynamicFormLayout) {
  return (
    formGroupValue: any,
    stateService: StateService,
    dynamicFormService: DynamicFormService,
    event: any
  ) => {
    enablePlate(formObj, formGroupValue, stateService, dynamicFormService);
  };
}
