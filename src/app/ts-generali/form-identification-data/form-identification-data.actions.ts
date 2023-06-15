import { StateService } from 'src/app/ts-state/state-service';
import { productSave } from '../../ts-product/form-identification-data/form-identification-data.actions';

export function generaliSave(formGroupValue: any, state: StateService) {
  // first run the product save logic
  console.log('first run the product save logic');
  productSave(formGroupValue, state);
  // then run the Generali save logic
  const generaliSaveLogicRes = `Veneto? ${formGroupValue.veneto}`;
  // then set the new message via the state service
  state.setMessage(`Result of Generali logic ${generaliSaveLogicRes}`);
}
