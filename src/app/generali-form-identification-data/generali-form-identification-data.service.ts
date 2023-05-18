import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormProcessor } from '../ts-form-processor/form-processor';
import { ProductFormIdentificationDataService } from '../product-form-identification-data/product-form-identification-data.service';

@Injectable({
  providedIn: 'root',
})
export class GeneraliFormIdentificationDataService implements FormProcessor {
  constructor(
    private productFormProcessor: ProductFormIdentificationDataService
  ) {}

  processForm(form: FormGroup) {
    return `Processing Generali Identification Data Form
    First process with the Product logic:
    ${this.productFormProcessor.processForm(form)}
    Then process with the Generali logic:
    Are you Veneto? ${form.get('veneto')?.value}`;
  }
}
