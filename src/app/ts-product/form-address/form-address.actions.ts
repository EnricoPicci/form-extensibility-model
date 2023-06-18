import { FormService } from '../../ts-dynamic-form/state/form-service';

export function productSaveAddress(
  formGroupValue: any,

  formService: FormService
) {
  // set the new message via the state service
  formService.setMessage(
    `Address saved with Product logic: ${JSON.stringify(formGroupValue)}`
  );
}

export function productValidateAddress(
  formGroupValue: any,

  formService: FormService
) {
  if (formGroupValue.street === undefined) {
    throw new Error('Street is required');
  }

  const isValid = formGroupValue.street.length > 3;
  const message = isValid
    ? 'Address is valid'
    : 'Address is not valid. It should be at least 3 characters long';
  // set the new message via the state service
  formService.setMessage(
    `Address validated with Product logic. Is valid? ${message}`
  );
}
