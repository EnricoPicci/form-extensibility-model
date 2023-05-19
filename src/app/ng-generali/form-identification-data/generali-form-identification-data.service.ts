import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormProcessor } from '../../ng-dynamic-form/dynamic-form/form-processor';
import { ProductFormIdentificationDataService } from '../../ng-product/form-identification-data/form-identification-data.service';

@Injectable({
  providedIn: 'root',
})
export class GeneraliFormIdentificationDataService implements FormProcessor {
  constructor(private FormProcessor: ProductFormIdentificationDataService) {}

  processForm(form: FormGroup) {
    return `Processing Generali Identification Data Form
    First process with the Product logic:
    ${this.FormProcessor.processForm(form)}
    Then process with the Generali logic:
    Are you Veneto? ${form.get('veneto')?.value}`;
  }
}
