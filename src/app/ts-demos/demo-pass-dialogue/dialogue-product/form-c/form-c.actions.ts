import { of, tap } from 'rxjs';
import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import {
  DialogueFormService,
  DynamicFormService,
} from 'src/app/ts-dynamic-form/services/form-service';
import { Dialogue_ProductService } from '../dialogue-product.service';
import { StateService } from 'src/app/ts-dynamic-form/services/state-service';

export function getPrevious(formObj: DynamicFormLayout) {
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
    const _service = dialogueService as Dialogue_ProductService;
    _service.next(
      formGroupValue,
      'dialogue-product/form-b',
      stateService,
      dynamicFormService
    );
  };
}

export function getSave(formObj: DynamicFormLayout) {
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
    const _service = dialogueService as Dialogue_ProductService;
    _service.save(formGroupValue, 'form-a', stateService, dynamicFormService);
  };
}
