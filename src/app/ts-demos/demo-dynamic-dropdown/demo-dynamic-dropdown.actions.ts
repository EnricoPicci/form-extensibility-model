import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import {
  DialogueFormService,
  DynamicFormService,
} from 'src/app/ts-dynamic-form/services/form-service';
import { StateService } from 'src/app/ts-dynamic-form/services/state-service';
import { fillCity } from './demo-dynamic-dropdown.service';

export function getFillCity(formObj: DynamicFormLayout) {
  return (
    formGroupValue: any,
    stateService: StateService,
    dynamicFormService: DynamicFormService,
    dialogueService: DialogueFormService,
    event: any
  ) => {
    fillCity(formGroupValue, formObj, stateService, dynamicFormService);
  };
}
