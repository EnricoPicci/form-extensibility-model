import { of, tap } from 'rxjs';
import { DynamicForm } from 'src/app/ts-dynamic-form/form';
import { StateService } from 'src/app/ts-state/state-service';

export function getEnableDriverName(formObj: DynamicForm) {
  return function enableDriverName(
    formGroupValue: any,
    state: StateService,
    event?: any
  ) {
    const plate = formGroupValue.plate;

    // here we simulate to go to the server to check if the plate is valid
    // and if it is valid we enable the driver name question, which is something we can do via the formObj
    return of(plate.trim().length > 0)
      .pipe(
        tap((enabled) => {
          const drivername = formObj.getUniqueQuestion('driverName');
          drivername.enabled = enabled;
        })
      )
      .subscribe();
  };
}
