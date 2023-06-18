import { DynamicForm } from 'src/app/ts-dynamic-form/form';
import { FormService } from 'src/app/ts-dynamic-form/state/form-service';

export function getEnablePlate(formObj: DynamicForm) {
  return function enablePlate(
    formGroupValue: any,

    formService: FormService,
    event?: any
  ) {
    const carBrand = formGroupValue.carBrand;
    const plateQuestion = formObj.getUniqueQuestion('plate');

    plateQuestion.enabled = carBrand.trim().length > 0;
    formService.updateFormLayout(formObj);

    // reset the value of plate if plate is disabled
    formGroupValue.plate = plateQuestion.enabled ? formGroupValue.plate : '';
    formService.formValue = formGroupValue;
  };
}
