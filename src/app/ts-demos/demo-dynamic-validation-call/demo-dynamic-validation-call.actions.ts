import { DynamicForm } from 'src/app/ts-dynamic-form/form';
import { FormService } from 'src/app/ts-dynamic-form/state/form-service';
import { DemoDynamicValidationCallService } from './demo-dynamic-validation-call.service';

export function getEnableDriverName(formObj: DynamicForm) {
  return (formGroupValue: any, service: FormService, event?: any) => {
    const _service = service as DemoDynamicValidationCallService;
    _service.enableDriverName(formGroupValue, formObj);
  };
}
