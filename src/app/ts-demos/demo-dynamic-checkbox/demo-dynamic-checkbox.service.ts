import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import { DynamicFormService } from 'src/app/ts-dynamic-form/services/form-service';
import { STATE_SERVICE } from 'src/app/ts-dynamic-form/services/state-service';

export class DemoDynamicCheckboxService extends DynamicFormService {
  enableVat(formGroupValue: any, formObj: DynamicFormLayout) {
    const isBusiness = formGroupValue.business;
    const vat = formObj.getUniqueQuestion('vat');

    vat.enabled = isBusiness;
    this.updateFormLayout(formObj);

    formGroupValue.vat = isBusiness ? vat.value : ''; // reset the value of vat
    STATE_SERVICE.formValue = formGroupValue;
  }
}
