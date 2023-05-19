import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { fromFormGroup } from '../../ng-dynamic-form/dynamic-form/form-group-questions-convertions';

import { FormProcessor } from '../../ng-dynamic-form/dynamic-form/form-processor';
import { processIdentificationData } from '../../ts-product/form-identification-data/form-identification-data.processor';

@Injectable({
  providedIn: 'root',
})
export class ProductFormIdentificationDataService implements FormProcessor {
  constructor() {}

  processForm(form: FormGroup) {
    const identificationData = fromFormGroup(form);
    return processIdentificationData(identificationData);
  }
}
