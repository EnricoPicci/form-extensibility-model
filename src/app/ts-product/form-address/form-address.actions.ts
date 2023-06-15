import { StateService } from '../../ts-state/state-service';

export function productSaveAddress(formGroupValue: any, state: StateService) {
  // set the new message via the state service
  state.setMessage(
    `Address saved with Product logic: ${JSON.stringify(formGroupValue)}`
  );
}

export function productValidateAddress(
  formGroupValue: any,
  state: StateService
) {
  if (formGroupValue.street === undefined) {
    throw new Error('Street is required');
  }

  const isValid = formGroupValue.street.length > 3;
  const message = isValid
    ? 'Address is valid'
    : 'Address is not valid. It should be at least 3 characters long';
  // set the new message via the state service
  state.setMessage(
    `Address validated with Product logic. Is valid? ${message}`
  );
}
