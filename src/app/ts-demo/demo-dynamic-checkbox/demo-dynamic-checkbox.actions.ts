import { DynamicForm } from 'src/app/ts-dynamic-form/form';
import { FormService } from 'src/app/ts-state/form-service';
import { StateService } from 'src/app/ts-state/state-service';

export function getEnableVat(formObj: DynamicForm) {
  return function enableVat(
    formGroupValue: any,
    state: StateService,
    formService: FormService,
    event: any
  ) {
    const isBusiness = formGroupValue.business;
    const vat = formObj.getUniqueQuestion('vat');

    vat.enabled = isBusiness;
    formService.updateFormLayout(formObj);

    formGroupValue.vat = isBusiness ? vat.value : ''; // reset the value of vat
    formService.updateFormValue(formGroupValue);
  };
}
