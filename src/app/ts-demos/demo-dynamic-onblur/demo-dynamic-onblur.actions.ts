import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import {
  DialogueFormService,
  DynamicFormService,
} from 'src/app/ts-dynamic-form/services/form-service';
import { DemoDynamicOnblurService } from './demo-dynamic-onblur.service';
import { StateService } from 'src/app/ts-dynamic-form/services/state-service';

export function getEnablePlate(formObj: DynamicFormLayout) {
  return (
    formGroupValue: any,
    stateService: StateService,
    dynamicFormService: DynamicFormService,
    dialogueService: DialogueFormService,
    event: any
  ) => {
    const _service = dialogueService as DemoDynamicOnblurService;
    _service.enablePlate(
      formObj,
      formGroupValue,
      stateService,
      dynamicFormService
    );
  };
}
