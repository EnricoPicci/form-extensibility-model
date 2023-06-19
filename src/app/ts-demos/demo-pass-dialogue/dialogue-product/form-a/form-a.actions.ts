import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import { FormService } from 'src/app/ts-dynamic-form/state/form-service';
import { Dialogue_ProductService } from '../dialogue-product.service';

export function getNext(formObj: DynamicFormLayout) {
  return (formGroupValue: any, formService: FormService, event?: any) => {
    //
    // here is the logic to implement
    // call the form service appropriate method
    const _service = formService as Dialogue_ProductService;
    _service.next(formGroupValue, 'dialogue-product/form-b');
  };
}