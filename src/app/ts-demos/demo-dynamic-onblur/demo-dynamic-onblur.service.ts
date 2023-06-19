import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import { DynamicFormService } from 'src/app/ts-dynamic-form/services/form-service';
import { STATE_SERVICE } from 'src/app/ts-dynamic-form/services/state-service';

export class DemoDynamicOnblurService extends DynamicFormService {
  enablePlate(formObj: DynamicFormLayout, formGroupValue: any) {
    const carBrand = formGroupValue.carBrand;
    const plateQuestion = formObj.getUniqueQuestion('plate');

    plateQuestion.enabled = carBrand.trim().length > 3;
    this.updateFormLayout(formObj);

    // reset the value of plate if plate is disabled
    formGroupValue.plate = plateQuestion.enabled ? formGroupValue.plate : '';
    STATE_SERVICE.formValue = formGroupValue;
  }
}
