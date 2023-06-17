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
import { FormDynamicDropdownComponent } from './ng-demo/demo-dynamic-dropdown/demo-dynamic-dropdown.component';
import { FormDynamicCheckboxComponent } from './ng-demo/demo-dynamic-checkbox/demo-dynamic-checkbox.component';
import { DemoDynamicOnblurComponent } from './ng-demo/demo-dynamic-onblur/demo-dynamic-onblur.component';
import { DemoDynamicValidationCallComponent } from './ng-demo/demo-dynamic-validation-call/demo-dynamic-validation-call.component';

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
    DemoDynamicOnblurComponent,
    DemoDynamicValidationCallComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
