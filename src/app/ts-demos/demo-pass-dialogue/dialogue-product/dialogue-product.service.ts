import { of, tap } from 'rxjs';
import { DynamicFormService } from 'src/app/ts-dynamic-form/services/form-service';
import { STATE_SERVICE } from 'src/app/ts-dynamic-form/services/state-service';

export class Dialogue_ProductService extends DynamicFormService {
  next(formGroupValue: any, nextRoute: string) {
    const storedFormVal = STATE_SERVICE.formValue;
    if (storedFormVal) {
      formGroupValue = { ...storedFormVal, ...formGroupValue };
    }
    STATE_SERVICE.formValue = formGroupValue;
    this.nextRoute(nextRoute);
  }

  save(formGroupValue: any, nextRouteIfSuccessfull: string) {
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
          this.nextRoute(nextRouteIfSuccessfull);
        })
      )
      .subscribe();
  }

  transitFrom_B_to_C(formGroupValue: any) {
    const err = this.validateTransitionFrom_B_to_C(formGroupValue);
    if (err) {
      this.setMessage(err.errorMsg);
      return;
    }
    this.next(formGroupValue, 'dialogue-product/form-c');
    return;
  }

  // this method validates the content of the form and returns an error message if the form is not valid
  // the validation logic is exposed as a public method so that it can be used by other layers (e.g. country or
  // client specifc layers)
  validateTransitionFrom_B_to_C(formGroupValue: any) {
    const field_B_Product = formGroupValue['field-B-Product'];
    // the logic is that the field_B_Product must be longer than 3 characters
    if (field_B_Product && field_B_Product.length <= 3) {
      return {
        errorMsg:
          'The value of the field "Field-B-Product" must be longer than 3 characters',
      };
    }
    return null;
  }
}
