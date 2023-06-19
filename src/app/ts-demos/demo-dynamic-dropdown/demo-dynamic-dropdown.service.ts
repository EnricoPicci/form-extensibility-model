import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import { DropdownQuestion } from 'src/app/ts-dynamic-form/questions/question-dropdown';
import { DynamicFormService } from 'src/app/ts-dynamic-form/services/form-service';
import { StateService } from 'src/app/ts-dynamic-form/services/state-service';

export class DemoDynamicDropdownService {
  fillCity(
    formGroupValue: any,
    formObj: DynamicFormLayout,
    stateService: StateService,
    dynamicFormService: DynamicFormService
  ) {
    const country = formGroupValue.country;
    const city = formObj.getUniqueQuestion('city') as DropdownQuestion<string>;

    formGroupValue.city = null;
    // here the value of the object represented by the form changes and therefore suche value neeeds to be
    // brodcaseted via the state service
    stateService.formValue = formGroupValue;

    // here we change the options of the city question
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
    dynamicFormService.updateFormLayout(formObj);
  }
}
