import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import {
  DialogueFormService,
  DynamicFormService,
} from 'src/app/ts-dynamic-form/services/form-service';
import { DemoDynamicCheckboxService } from './demo-dynamic-checkbox.service';
import { StateService } from 'src/app/ts-dynamic-form/services/state-service';

export function getEnableVat(formObj: DynamicFormLayout) {
  return (
    formGroupValue: any,
    stateService: StateService,
    dialogueService: DialogueFormService,
    event: any
  ) => {
    const _service = dialogueService as DemoDynamicCheckboxService;
    _service.enableVat(formGroupValue, formObj);
  };
}
