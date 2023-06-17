import { of, tap } from 'rxjs';
import { DynamicForm } from 'src/app/ts-dynamic-form/form';
import { FormService } from 'src/app/ts-state/form-service';
import { StateService } from 'src/app/ts-state/state-service';

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
    state.nextRoute('form-b');
  };
}

export function getSave(formObj: DynamicForm) {
  return function save(
    formGroupValue: any,
    state: StateService,
    formService: FormService,
    event?: any
  ) {
    const storedFormVal = state.formValue;
    if (storedFormVal) {
      formGroupValue = { ...formGroupValue, ...storedFormVal };
    }

    // here we simulate to go to the server to save the form
    of(formGroupValue)
      .pipe(
        tap((formValue) => {
          state.setMessage(`Form saved: ${JSON.stringify(formGroupValue)}`);
          state.formValue = {};
          state.nextRoute('form-a');
        })
      )
      .subscribe();
  };
}
