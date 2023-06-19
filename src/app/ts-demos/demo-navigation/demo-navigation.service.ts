import { of, tap } from 'rxjs';
import { DynamicFormService } from 'src/app/ts-dynamic-form/services/form-service';
import { StateService } from 'src/app/ts-dynamic-form/services/state-service';

export class DemoDynamicNavigationService {
  next(
    formGroupValue: any,
    nextRoute: string,
    stateService: StateService,
    dynamicFormService: DynamicFormService
  ) {
    const storedFormVal = stateService.formValue;
    if (storedFormVal) {
      formGroupValue = { ...storedFormVal, ...formGroupValue };
    }
    stateService.formValue = formGroupValue;
    dynamicFormService.nextRoute(nextRoute);
  }

  save(
    formGroupValue: any,
    stateService: StateService,
    dynamicFormService: DynamicFormService
  ) {
    const storedFormVal = stateService.formValue;
    if (storedFormVal) {
      formGroupValue = {
        ...storedFormVal,
        ...formGroupValue,
      };
    }

    // here we simulate to go to the server to save the form
    of(formGroupValue)
      .pipe(
        tap((formValue) => {
          dynamicFormService.setMessage(
            `Form saved: ${JSON.stringify(formGroupValue)}`
          );
          stateService.formValue = {};
          // go back to the first form
          dynamicFormService.nextRoute('navigation/');
        })
      )
      .subscribe();
  }
}
