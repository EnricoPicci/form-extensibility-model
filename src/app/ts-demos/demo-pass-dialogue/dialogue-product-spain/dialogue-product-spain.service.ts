import { Dialogue_ProductService } from '../dialogue-product/dialogue-product.service';

export class Dialogue_Product_Spain_Service extends Dialogue_ProductService {
  transitFrom_B_to_C_Spain(formGroupValue: any) {
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
      this.setMessage(errors.join('\n'));
      return;
    }
    // if there are no errors than we can go to the next step
    this.next(formGroupValue, 'dialogue-product/form-c');
    return;
  }

  // this method returns true if the value of the form is valid and the transition to the next step is allowed
  validateTransitionFrom_B_to_C_Spain(formGroupValue: any) {
    const field_B_Product = formGroupValue['field-B-Spain'];
    // the logic is that the field_B_Product must be longer than 5 characters
    return field_B_Product && field_B_Product.length > 5;
  }
}
