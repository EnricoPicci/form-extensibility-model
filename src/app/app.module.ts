import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormQuestionComponent } from './ng-dynamic-form/dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './ng-dynamic-form/dynamic-form/dynamic-form.component';
import { ProductFormIdentificationDataComponent } from './ng-product/form-identification-data/form-identification-data.component';
import { GeneraliFormIdentificationDataComponent } from './ng-generali/form-identification-data/form-identification-data.component';
import { ProductFormAddressComponent } from './ng-product/form-address/form-address.component';
import { GeneraliFormAddressComponent } from './ng-generali/form-address/form-address.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent,
    ProductFormIdentificationDataComponent,
    GeneraliFormIdentificationDataComponent,
    ProductFormAddressComponent,
    GeneraliFormAddressComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
