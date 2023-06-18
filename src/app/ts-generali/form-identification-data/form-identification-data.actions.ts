import { FormService } from 'src/app/ts-dynamic-form/state/form-service';
import { productSave } from '../../ts-product/form-identification-data/form-identification-data.actions';

export function generaliSave(
  formGroupValue: any,

  formService: FormService
) {
  // first run the product save logic
  console.log('first run the product save logic');
  productSave(formGroupValue, formService);
  // then run the Generali save logic
  const generaliSaveLogicRes = `Veneto? ${formGroupValue.veneto}`;
  // then set the new message via the state service
  formService.setMessage(`Result of Generali logic ${generaliSaveLogicRes}`);
}
