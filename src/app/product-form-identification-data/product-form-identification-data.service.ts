import { Injectable } from '@angular/core';
import { FormProcessor } from '../dynamic-form/form-processor';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ProductFormIdentificationDataService implements FormProcessor {
  constructor() {}

  processForm(form: FormGroup) {
    return `Processing Product Identification Data Form\n ${JSON.stringify(
      form.getRawValue()
    )}`;
  }
}
