import { StateService } from 'src/app/ts-state/state-service';

import { productSaveAddress } from '../../ts-product/form-address/form-address.actions';

// customize the address save logic for Generali but not the validation logic
export function generaliSave(formGroupValue: any, state: StateService) {
  // first run the product save logic
  console.log('first run the product save logic for the address');
  productSaveAddress(formGroupValue, state);
  // then run the Generali save logic for the address
  const generaliSaveLogicRes = `the full address has been saved also in the Generali systems`;
  // then set the new message via the state service
  state.setMessage(`Result of Generali logic ${generaliSaveLogicRes}`);
}
