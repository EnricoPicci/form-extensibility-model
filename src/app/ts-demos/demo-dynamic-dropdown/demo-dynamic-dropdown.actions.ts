import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import {
  DialogueFormService,
  DynamicFormService,
} from 'src/app/ts-dynamic-form/services/form-service';
import { DemoDynamicDropdownService } from './demo-dynamic-dropdown.service';
import { StateService } from 'src/app/ts-dynamic-form/services/state-service';

export function getFillCity(formObj: DynamicFormLayout) {
  return (
    formGroupValue: any,
    stateService: StateService,
    dialogueService: DialogueFormService,
    event: any
  ) => {
    const _service = dialogueService as DemoDynamicDropdownService;
    _service.fillCity(formGroupValue, formObj);
  };
}
