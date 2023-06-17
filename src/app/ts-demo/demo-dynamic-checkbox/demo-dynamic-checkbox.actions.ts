import { DynamicForm } from 'src/app/ts-dynamic-form/form';
import { DropdownQuestion } from 'src/app/ts-dynamic-form/questions/question-dropdown';
import { StateService } from 'src/app/ts-state/state-service';

export function getEnableVat(formObj: DynamicForm) {
  return function enableVat(
    formGroupValue: any,
    state: StateService,
    event: any
  ) {
    const isBusiness = formGroupValue.business;
    const vat = formObj.getUniqueQuestion('vat');

    vat.enabled = isBusiness;
    state.setFormLayout(formObj);

    formGroupValue.vat = isBusiness ? vat.value : ''; // reset the value of vat
    state.setFormValue(formGroupValue);
  };
}
