import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import {
  DialogueFormService,
  DynamicFormService,
} from 'src/app/ts-dynamic-form/services/form-service';
import { DemoDynamicNavigationService } from '../demo-navigation.service';
import { StateService } from 'src/app/ts-dynamic-form/services/state-service';

export function getNext(formObj: DynamicFormLayout) {
  return (
    formGroupValue: any,
    stateService: StateService,
    dynamicFormService: DynamicFormService,
    dialogueService: DialogueFormService,
    event: any
  ) => {
    //
    // here is the logic to implement
    // call the form service appropriate method
    const _service = dialogueService as DemoDynamicNavigationService;
    _service.next(
      formGroupValue,
      'navigation/form-b',
      stateService,
      dynamicFormService
    );
  };
}
