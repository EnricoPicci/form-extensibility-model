import { of, tap } from 'rxjs';

import { DialogueState } from 'src/app/ts-dynamic-form/services/dialogue-state';

export function next(
  formValue: any,
  nextRoute: string,
  stateService: DialogueState
) {
  stateService.mergeIntoFormValue(formValue);
  stateService.nextRoute(nextRoute);
}

export function save(
  formValue: any,
  nextRouteIfSuccessfull: string,
  stateService: DialogueState
) {
  stateService.mergeIntoFormValue(formValue);

  // here we simulate to go to the server to save the form
  of(stateService.formValue)
    .pipe(
      tap((formValue) => {
        stateService.setMessage(`Form saved: ${JSON.stringify(formValue)}`);
        stateService.formValue = {};
        // go back to the first form
        stateService.nextRoute(nextRouteIfSuccessfull);
      })
    )
    .subscribe();
}

export function transitFrom_B_to_C(
  formValue: any,
  stateService: DialogueState
) {
  const err = validateTransitionFrom_B_to_C(formValue);
  if (err) {
    stateService.setMessage(err.errorMsg);
    return;
  }
  stateService.mergeIntoFormValue(formValue);
  stateService.nextRoute('form-c');
  return;
}

// this function validates the content of the form and returns an error message if the form is not valid
// the validation logic is exported as a public function so that it can be used by other layers (e.g. country or
// client specifc layers)
export function validateTransitionFrom_B_to_C(formValue: any) {
  const field_B_Product = formValue['field-B-Product'];
  // the logic is that the field_B_Product must be longer than 3 characters
  if (field_B_Product && field_B_Product.length <= 3) {
    return {
      errorMsg:
        'The value of the field "Field-B-Product" must be longer than 3 characters',
    };
  }
  return null;
}
