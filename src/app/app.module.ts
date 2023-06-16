import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormQuestionComponent } from './ng-dynamic-form/dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './ng-dynamic-form/dynamic-form/dynamic-form.component';
import { ProductFormIdentificationDataComponent } from './ng-product/form-identification-data/product-form-identification-data.component';
import { GeneraliFormIdentificationDataComponent } from './ng-generali/form-identification-data/generali-form-identification-data.component';
import { ProductFormAddressComponent } from './ng-product/form-address/product-form-address.component';
import { GeneraliFormAddressComponent } from './ng-generali/form-address/generali-form-address.component';
import { DynamicFormSectionComponent } from './ng-dynamic-form/dynamic-form-section/dynamic-form-section.component';
import { FormDynamicDropdownComponent } from './ng-demo/form-dynamic-dropdown/form-dynamic-dropdown.component';
import { FormDynamicCheckboxComponent } from './ng-demo/form-dynamic-checkbox/form-dynamic-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent,
    ProductFormIdentificationDataComponent,
    GeneraliFormIdentificationDataComponent,
    ProductFormAddressComponent,
    GeneraliFormAddressComponent,
    DynamicFormSectionComponent,
    FormDynamicDropdownComponent,
    FormDynamicCheckboxComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
