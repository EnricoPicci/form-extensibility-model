import { of, tap } from 'rxjs';
import { DynamicFormService } from 'src/app/ts-dynamic-form/services/form-service';
import { StateService } from 'src/app/ts-dynamic-form/services/state-service';

export class Dialogue_ProductService {
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
    nextRouteIfSuccessfull: string,
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
          dynamicFormService.nextRoute(nextRouteIfSuccessfull);
        })
      )
      .subscribe();
  }

  transitFrom_B_to_C(
    formGroupValue: any,
    dynamicFormService: DynamicFormService
  ) {
    const err = this.validateTransitionFrom_B_to_C(formGroupValue);
    if (err) {
      dynamicFormService.setMessage(err.errorMsg);
      return;
    }
    dynamicFormService.nextRoute('dialogue-product/form-c');
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
