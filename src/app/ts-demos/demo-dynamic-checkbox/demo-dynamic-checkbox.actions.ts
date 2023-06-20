import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import {
  DialogueFormService,
  DynamicFormService,
} from 'src/app/ts-dynamic-form/services/form-service';
import { StateService } from 'src/app/ts-dynamic-form/services/state-service';
import { enableVat } from './demo-dynamic-checkbox.service';

export function getEnableVat(formLayout: DynamicFormLayout) {
  return (
    formGroupValue: any,
    stateService: StateService,
    dynamicFormService: DynamicFormService,
    dialogueService: DialogueFormService,
    event: any
  ) => {
    enableVat(formGroupValue, formLayout, stateService, dynamicFormService);
  };
}
