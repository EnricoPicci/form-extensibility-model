import { FormStateService } from 'src/app/ts-dynamic-form/services/form-state-service';

export function toFormC(formGroupValue: any, stateService: FormStateService) {
  stateService.mergeIntoFormValue(formGroupValue);
  stateService.nextRoute('form-c');
}
