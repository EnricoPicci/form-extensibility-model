import { of, tap } from 'rxjs';
import { DynamicFormService } from 'src/app/ts-dynamic-form/services/form-service';
import { STATE_SERVICE } from 'src/app/ts-dynamic-form/services/state-service';

export class DemoDynamicNavigationService extends DynamicFormService {
  next(formGroupValue: any, nextRoute: string) {
    const storedFormVal = STATE_SERVICE.formValue;
    if (storedFormVal) {
      formGroupValue = { ...storedFormVal, ...formGroupValue };
    }
    STATE_SERVICE.formValue = formGroupValue;
    this.nextRoute(nextRoute);
  }

  save(formGroupValue: any) {
    const storedFormVal = STATE_SERVICE.formValue;
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
          this.setMessage(`Form saved: ${JSON.stringify(formGroupValue)}`);
          STATE_SERVICE.formValue = {};
          // go back to the first form
          this.nextRoute('navigation/');
        })
      )
      .subscribe();
  }
}
