import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormProcessor } from '../ts-form-processor/form-processor';
import { processIdentificationData } from '../ts-product-form-identification-data/product-form-identification-data.processor';
import { fromFormGroup } from '../dynamic-form/form-group-questions-convertions';

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
