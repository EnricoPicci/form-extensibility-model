import { of, tap } from 'rxjs';
import { DynamicForm } from 'src/app/ts-dynamic-form/form';
import { FormService } from 'src/app/ts-dynamic-form/state/form-service';
import { DemoDynamicNavigationService } from '../demo-navigation.service';

export function getPrevious(formObj: DynamicForm) {
  return (formGroupValue: any, formService: FormService, event?: any) => {
    //
    // here is the logic to implement
    // call the form service appropriate method
    const _service = formService as DemoDynamicNavigationService;
    _service.next(formGroupValue, 'navigation/form-b');
  };
}

export function getSave(formObj: DynamicForm) {
  return (formGroupValue: any, formService: FormService, event?: any) => {
    //
    // here is the logic to implement
    // call the form service appropriate method
    const _service = formService as DemoDynamicNavigationService;
    _service.save(formGroupValue);
  };
}
