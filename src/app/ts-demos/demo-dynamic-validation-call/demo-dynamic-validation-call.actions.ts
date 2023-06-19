import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import {
  DialogueFormService,
  DynamicFormService,
} from 'src/app/ts-dynamic-form/services/form-service';
import { DemoDynamicValidationCallService } from './demo-dynamic-validation-call.service';
import { StateService } from 'src/app/ts-dynamic-form/services/state-service';

export function getEnableDriverName(formObj: DynamicFormLayout) {
  return (
    formGroupValue: any,
    stateService: StateService,
    dynamicFormService: DynamicFormService,
    dialogueService: DialogueFormService,
    event: any
  ) => {
    const _service = dialogueService as DemoDynamicValidationCallService;
    _service.enableDriverName(
      formGroupValue,
      formObj,
      stateService,
      dynamicFormService
    );
  };
}
