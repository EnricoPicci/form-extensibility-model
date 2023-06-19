import { of, tap } from 'rxjs';
import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import { FormService } from 'src/app/ts-dynamic-form/state/form-service';
import { getRemoteServer } from './remote-server/remote-server';

export class DemoDynamicValidationCallService extends FormService {
  enableDriverName(formGroupValue: any, formObj: DynamicFormLayout) {
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
          this.updateFormLayout(formObj);

          // reset the value of driver name if driver name is disabled
          formGroupValue.driverName = drivernameQuestion.enabled
            ? formGroupValue.driverName
            : '';
          this.formValue = formGroupValue;
        })
      )
      .subscribe();
  }
}
