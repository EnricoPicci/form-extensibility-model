import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { DialogueState } from 'src/app/ts-dynamic-form/services/dialogue-state';
import { next } from '../dialogue-product.functions';

export function getNext(formLayout: DynamicFormLayout) {
  return (formValue: any, stateService: DialogueState, event: any) => {
    //
    // here is the logic to implement
    // call the form service appropriate method
    next(formValue, 'form-b', stateService);
  };
}
