import { StateService } from '../../ts-state/state-service';

export function productSave(formGroupValue: any, state: StateService) {
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
