import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import { DynamicFormService } from 'src/app/ts-dynamic-form/services/form-service';
import { StateService } from 'src/app/ts-dynamic-form/services/state-service';

export class DemoDynamicCheckboxService {
  enableVat(
    formGroupValue: any,
    formObj: DynamicFormLayout,
    stateService: StateService,
    dynamicFormService: DynamicFormService
  ) {
    const isBusiness = formGroupValue.business;
    const vat = formObj.getUniqueQuestion('vat');

    vat.enabled = isBusiness;
    dynamicFormService.updateFormLayout(formObj);

    formGroupValue.vat = isBusiness ? vat.value : ''; // reset the value of vat
    stateService.formValue = formGroupValue;
  }
}
