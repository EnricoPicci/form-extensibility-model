import { DynamicForm } from 'src/app/ts-dynamic-form/form';
import { StateService } from 'src/app/ts-state/state-service';

export function getEnablePlate(formObj: DynamicForm) {
  return function enablePlate(
    formGroupValue: any,
    state: StateService,
    event?: any
  ) {
    const carBrand = formGroupValue.carBrand;
    const plate = formObj.getUniqueQuestion('plate');

    plate.enabled = carBrand.trim().length > 0;
  };
}
