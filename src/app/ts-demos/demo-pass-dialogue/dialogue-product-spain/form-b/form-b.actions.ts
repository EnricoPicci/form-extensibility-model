import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { DialogueState } from 'src/app/ts-dynamic-form/services/dialogue-state';
import { transitFrom_B_to_C_Spain } from '../dialogue-product-spain.functions';

// create the "bridge" function that calls the specific function that the Spain layer implements
// as customizaion of the generic Product behaviour
export function getTransitFrom_B_to_C_Spain(formLayout: DynamicFormLayout) {
  return (formValue: any, stateService: DialogueState, event: any) => {
    //
    // here is the logic to implement
    // call the form service appropriate method
    transitFrom_B_to_C_Spain(formValue, stateService);
  };
}
