import { DynamicForm } from 'src/app/ts-dynamic-form/form';
import { StateService } from 'src/app/ts-state/state-service';

export function getEnablePlate(formObj: DynamicForm) {
  return function enablePlate(
    formGroupValue: any,
    state: StateService,
    event?: any
  ) {
    const carBrand = formGroupValue.carBrand;
    const plate = formGroupValue.plate;
    const plateControl = formObj.getUniqueQuestion('plate');

    plateControl.enabled = carBrand.trim().length > 0;
    state.setFormLayout(formObj);

    // reset the value of plate if plate is disabled
    formGroupValue.plate = plateControl.enabled ? formGroupValue.plate : '';
    state.setFormValue(formGroupValue);
  };
}
