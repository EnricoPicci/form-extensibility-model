import { FormService } from 'src/app/ts-dynamic-form/state/form-service';

export class DemoDynamicCheckboxState extends FormService {
  enableVat(formGroupValue: any, formObj: any) {
    const isBusiness = formGroupValue.business;
    const vat = formObj.getUniqueQuestion('vat');

    vat.enabled = isBusiness;
    this.updateFormLayout(formObj);

    formGroupValue.vat = isBusiness ? vat.value : ''; // reset the value of vat
    this.formValue = formGroupValue;
  }
}
