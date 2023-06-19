import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import { FormService } from 'src/app/ts-dynamic-form/state/form-service';

export class DemoDynamicCheckboxService extends FormService {
  enableVat(formGroupValue: any, formObj: DynamicFormLayout) {
    const isBusiness = formGroupValue.business;
    const vat = formObj.getUniqueQuestion('vat');

    vat.enabled = isBusiness;
    this.updateFormLayout(formObj);

    formGroupValue.vat = isBusiness ? vat.value : ''; // reset the value of vat
    this.formValue = formGroupValue;
  }
}
