import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import { FormService } from 'src/app/ts-dynamic-form/state/form-service';

export class DemoDynamicOnblurService extends FormService {
  enablePlate(formObj: DynamicFormLayout, formGroupValue: any) {
    const carBrand = formGroupValue.carBrand;
    const plateQuestion = formObj.getUniqueQuestion('plate');

    plateQuestion.enabled = carBrand.trim().length > 3;
    this.updateFormLayout(formObj);

    // reset the value of plate if plate is disabled
    formGroupValue.plate = plateQuestion.enabled ? formGroupValue.plate : '';
    this.formValue = formGroupValue;
  }
}
