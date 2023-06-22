import { DialogueState } from 'src/app/ts-dynamic-form/services/dialogue-state';

export function toFormC(formValue: any, stateService: DialogueState) {
  stateService.mergeIntoFormValue(formValue);
  stateService.nextRoute('form-c');
}

export function previous(formValue: any, stateService: DialogueState) {
  stateService.mergeIntoFormValue(formValue);
  stateService.previousRoute();
}
