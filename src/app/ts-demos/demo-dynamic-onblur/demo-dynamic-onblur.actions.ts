import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import { FormService } from 'src/app/ts-dynamic-form/state/form-service';
import { DemoDynamicOnblurService } from './demo-dynamic-onblur.service';

export function getEnablePlate(formObj: DynamicFormLayout) {
  return (formGroupValue: any, service: FormService, event?: any) => {
    const _service = service as DemoDynamicOnblurService;
    _service.enablePlate(formObj, formGroupValue);
  };
}
