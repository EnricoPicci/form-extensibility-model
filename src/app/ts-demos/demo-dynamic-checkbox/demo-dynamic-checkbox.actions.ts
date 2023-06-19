import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import { FormService } from 'src/app/ts-dynamic-form/state/form-service';
import { DemoDynamicCheckboxService } from './demo-dynamic-checkbox.service';

export function getEnableVat(formObj: DynamicFormLayout) {
  return (formGroupValue: any, service: FormService, event: any) => {
    const _service = service as DemoDynamicCheckboxService;
    _service.enableVat(formGroupValue, formObj);
  };
}
