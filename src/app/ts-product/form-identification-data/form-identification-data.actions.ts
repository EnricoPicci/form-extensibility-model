import { FormService } from '../../ts-state/form-service';
import { StateService } from 'src/app/ts-state/state-service';

export function productSave(
  formGroupValue: any,
  state: StateService,
  formService: FormService
) {
  // set the new message via the state service
  state.setMessage(
    `ProductIdentificationData saved: ${JSON.stringify(formGroupValue)}`
  );
}

export function getProductIdentificationDataActions() {
  return [
    {
      name: 'Save',
      function: productSave,
    },
  ];
}
