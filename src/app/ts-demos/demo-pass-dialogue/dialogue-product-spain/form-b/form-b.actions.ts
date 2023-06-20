import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import {
  DialogueFormService,
  DynamicFormService,
} from 'src/app/ts-dynamic-form/services/form-service';
import { StateService } from 'src/app/ts-dynamic-form/services/state-service';
import { transitFrom_B_to_C_Spain } from '../dialogue-product-spain.service';

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
    transitFrom_B_to_C_Spain(formGroupValue, stateService);
  };
}
