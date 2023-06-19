import { of, tap } from 'rxjs';
import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import { DynamicFormService } from 'src/app/ts-dynamic-form/services/form-service';
import { getRemoteServer } from './remote-server/remote-server';
import { StateService } from 'src/app/ts-dynamic-form/services/state-service';

export class DemoDynamicValidationCallService {
  enableDriverName(
    formGroupValue: any,
    formObj: DynamicFormLayout,
    stateService: StateService,
    dynamicFormService: DynamicFormService,
    event?: any
  ) {
    const plate = formGroupValue.plate;

    // here we simulate to go to the server to check if the plate is valid
    // and if it is valid we enable the driver name question, which is something we can do via the formObj
    getRemoteServer()
      .validatePlate(plate)
      .pipe(
        tap((enabled) => {
          const plate = formGroupValue.plate;
          const drivernameQuestion = formObj.getUniqueQuestion('driverName');

          drivernameQuestion.enabled = enabled;
          dynamicFormService.updateFormLayout(formObj);

          // reset the value of driver name if driver name is disabled
          formGroupValue.driverName = drivernameQuestion.enabled
            ? formGroupValue.driverName
            : '';
          stateService.formValue = formGroupValue;
        })
      )
      .subscribe();
  }
}
