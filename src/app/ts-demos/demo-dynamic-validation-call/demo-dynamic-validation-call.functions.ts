import { of, tap } from 'rxjs';
import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';

import { getRemoteServer } from './remote-server/remote-server';
import { DialogueState } from 'src/app/ts-dynamic-form/services/dialogue-state';

export function enableDriverName(
  formValue: any,
  formLayout: DynamicFormLayout,
  stateService: DialogueState,
  event?: any
) {
  const plate = formValue.plate;

  // here we simulate to go to the server to check if the plate is valid
  // and if it is valid we enable the driver name question, which is something we can do via the formLayout
  getRemoteServer()
    .validatePlate(plate)
    .pipe(
      tap((enabled) => {
        const plate = formValue.plate;
        const drivernameQuestion = formLayout.getUniqueQuestion('driverName');

        drivernameQuestion.enabled = enabled;
        stateService.updateFormLayout(formLayout);

        // reset the value of driver name if driver name is disabled
        formValue.driverName = drivernameQuestion.enabled
          ? formValue.driverName
          : '';
        stateService.formValue = formValue;
      })
    )
    .subscribe();
}
