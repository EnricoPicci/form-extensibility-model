import { of, tap } from 'rxjs';
import { DynamicForm } from 'src/app/ts-dynamic-form/form';
import { FormService } from 'src/app/ts-dynamic-form/state/form-service';

export function getEnableDriverName(formObj: DynamicForm) {
  return function enableDriverName(
    formGroupValue: any,

    formService: FormService,
    event?: any
  ) {
    const plate = formGroupValue.plate;

    // here we simulate to go to the server to check if the plate is valid
    // and if it is valid we enable the driver name question, which is something we can do via the formObj
    of(plate.trim().length > 3)
      .pipe(
        tap((enabled) => {
          const plate = formGroupValue.plate;
          const drivernameQuestion = formObj.getUniqueQuestion('driverName');

          drivernameQuestion.enabled = enabled;
          formService.updateFormLayout(formObj);

          // reset the value of driver name if driver name is disabled
          formGroupValue.driverName = drivernameQuestion.enabled
            ? formGroupValue.driverName
            : '';
          formService.formValue = formGroupValue;
        })
      )
      .subscribe();
  };
}
