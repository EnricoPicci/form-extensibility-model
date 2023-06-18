import { DynamicForm } from 'src/app/ts-dynamic-form/form';
import { FormService } from 'src/app/ts-dynamic-form/state/form-service';
import { DemoDynamicDropdownService } from './demo-dynamic-dropdown.service';

export function getFillCity(formObj: DynamicForm) {
  return (formGroupValue: any, service: FormService, event: any) => {
    const _service = service as DemoDynamicDropdownService;
    _service.fillCity(formGroupValue, formObj);
  };
}
