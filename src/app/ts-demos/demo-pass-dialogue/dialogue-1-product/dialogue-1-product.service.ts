import { of, tap } from 'rxjs';
import { FormService } from 'src/app/ts-dynamic-form/state/form-service';

export class Dialogue_1_ProductService extends FormService {
  next(formGroupValue: any, nextRoute: string) {
    const storedFormVal = this.formValue;
    if (storedFormVal) {
      formGroupValue = { ...storedFormVal, ...formGroupValue };
    }
    this.formValue = formGroupValue;
    this.nextRoute(nextRoute);
  }

  save(formGroupValue: any, nextRouteIfSuccessfull: string) {
    const storedFormVal = this.formValue;
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
          this.formValue = {};
          // go back to the first form
          this.nextRoute(nextRouteIfSuccessfull);
        })
      )
      .subscribe();
  }
}
