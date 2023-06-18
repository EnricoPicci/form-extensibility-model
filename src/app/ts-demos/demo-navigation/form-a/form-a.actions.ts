import { DynamicForm } from 'src/app/ts-dynamic-form/form';
import { FormService } from 'src/app/ts-dynamic-form/state/form-service';

export function getNext(formObj: DynamicForm) {
  return function next(
    formGroupValue: any,

    formService: FormService,
    event?: any
  ) {
    const storedFormVal = state.formValue;
    if (storedFormVal) {
      formGroupValue = { ...storedFormVal, ...formGroupValue };
    }
    state.formValue = formGroupValue;
    state.nextRoute('form-b');
  };
}
