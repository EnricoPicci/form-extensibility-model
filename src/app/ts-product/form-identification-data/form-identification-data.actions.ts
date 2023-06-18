import { FormService } from '../../ts-dynamic-form/state/form-service';

export function productSave(
  formGroupValue: any,

  formService: FormService
) {
  // set the new message via the state service
  formService.setMessage(
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
