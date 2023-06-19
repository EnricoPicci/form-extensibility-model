import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import { DynamicFormService } from 'src/app/ts-dynamic-form/services/form-service';
import { StateService } from 'src/app/ts-dynamic-form/services/state-service';

export class DemoDynamicOnblurService {
  enablePlate(
    formObj: DynamicFormLayout,
    formGroupValue: any,
    stateService: StateService,
    dynamicFormService: DynamicFormService
  ) {
    const carBrand = formGroupValue.carBrand;
    const plateQuestion = formObj.getUniqueQuestion('plate');

    plateQuestion.enabled = carBrand.trim().length > 3;
    dynamicFormService.updateFormLayout(formObj);

    // reset the value of plate if plate is disabled
    formGroupValue.plate = plateQuestion.enabled ? formGroupValue.plate : '';
    stateService.formValue = formGroupValue;
  }
}
