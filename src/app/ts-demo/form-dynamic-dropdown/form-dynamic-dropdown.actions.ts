import { DynamicForm } from 'src/app/ts-dynamic-form/form';
import { DropdownQuestion } from 'src/app/ts-dynamic-form/questions/question-dropdown';
import { StateService } from 'src/app/ts-state/state-service';

export function getFillCity(formObj: DynamicForm) {
  return function fillCity(
    formGroupValue: any,
    state: StateService,
    event: any
  ) {
    const country = formGroupValue.country;
    const city = formObj.getUniqueQuestion('city') as DropdownQuestion<string>;

    if (country === 'italy') {
      city.options = [
        { key: 'rome', value: 'Rome' },
        { key: 'milan', value: 'Milan' },
      ];
    } else if (country === 'france') {
      city.options = [
        { key: 'paris', value: 'Paris' },
        { key: 'lyon', value: 'Lyon' },
      ];
    }
  };
}
