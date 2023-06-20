import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import {
  DialogueFormService,
  DynamicFormService,
} from 'src/app/ts-dynamic-form/services/form-service';
import { Dialogue_Product_Spain_Service } from '../dialogue-product-spain.service';
import { StateService } from 'src/app/ts-dynamic-form/services/state-service';

// create the "bridge" function that calls the specific function that the Spain layer implements
// as customizaion of the generic Product behaviour
export function getTransitFrom_B_to_C_Spain(formObj: DynamicFormLayout) {
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
    const _service = dialogueService as Dialogue_Product_Spain_Service;
    _service.transitFrom_B_to_C_Spain(formGroupValue, stateService);
  };
}
