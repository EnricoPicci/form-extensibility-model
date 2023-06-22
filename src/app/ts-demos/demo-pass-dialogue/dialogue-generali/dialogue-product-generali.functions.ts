import { DialogueState } from 'src/app/ts-dynamic-form/services/dialogue-state';

export function toFormC(formGroupValue: any, stateService: DialogueState) {
  stateService.mergeIntoFormValue(formGroupValue);
  stateService.nextRoute('form-c');
}
