import { DynamicForm } from 'src/app/ts-dynamic-form/form';
import { FormService } from 'src/app/ts-state/form-service';
import { StateService } from 'src/app/ts-state/state-service';

export function getNext(formObj: DynamicForm) {
  return function next(
    formGroupValue: any,
    state: StateService,
    formService: FormService,
    event?: any
  ) {
    const storedFormVal = state.formValue;
    if (storedFormVal) {
      formGroupValue = { ...formGroupValue, ...storedFormVal };
    }
    state.formValue = formGroupValue;
    state.nextRoute('form-c');
  };
}

export function getPrevious(formObj: DynamicForm) {
  return function previous(
    formGroupValue: any,
    state: StateService,
    formService: FormService,
    event?: any
  ) {
    const storedFormVal = state.formValue;
    if (storedFormVal) {
      formGroupValue = { ...formGroupValue, ...storedFormVal };
    }
    state.formValue = formGroupValue;
    state.nextRoute('form-a');
  };
}
