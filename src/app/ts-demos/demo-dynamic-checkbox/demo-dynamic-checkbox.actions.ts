import { DynamicForm } from 'src/app/ts-dynamic-form/form';
import { FormService } from 'src/app/ts-dynamic-form/state/form-service';
import { DemoDynamicCheckboxState } from './demo-dynamic-checkbox.state';

export function getEnableVat(formObj: DynamicForm) {
  return (formGroupValue: any, service: FormService, event: any) => {
    const _service = service as DemoDynamicCheckboxState;
    _service.enableVat(formGroupValue, formObj);
  };
}
