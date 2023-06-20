import { DynamicFormService } from 'src/app/ts-dynamic-form/services/form-service';
import { Dialogue_ProductService } from '../dialogue-product/dialogue-product.service';
import { StateService } from 'src/app/ts-dynamic-form/services/state-service';

export class Dialogue_Product_Spain_Service extends Dialogue_ProductService {
  transitFrom_B_to_C_Spain(formGroupValue: any, stateService: StateService) {
    const errors: { errorMsg: string }[] = [];
    // first call the validation logic defined at the Product layer
    let err = this.validateTransitionFrom_B_to_C(formGroupValue);
    if (err) {
      errors.push(err);
    }
    // then call the validation logic defined at the Spain layer
    err = this.validateTransitionFrom_B_to_C_Spain(formGroupValue);
    if (err) {
      errors.push(err);
    }

    // if errors are encountered, error messages are notified
    if (errors.length > 0) {
      stateService.setMessage(errors.map((err) => err.errorMsg).join('\n'));
      return;
    }
    // if there are no errors than we can go to the next step
    stateService.mergeIntoFormValue(formGroupValue);
    stateService.nextRoute('form-c');
    return;
  }

  // this method returns true if the value of the form is valid and the transition to the next step is allowed
  validateTransitionFrom_B_to_C_Spain(formGroupValue: any) {
    const field_B_Product_Spain = formGroupValue['field-B-Spain'];
    // the logic is that the field_B_Product must be longer than 5 characters
    if (field_B_Product_Spain && field_B_Product_Spain.length <= 5) {
      return {
        errorMsg:
          'The value of the field "Field-B-Product-Spain" must be longer than 5 characters',
      };
    }
    return null;
  }
}
