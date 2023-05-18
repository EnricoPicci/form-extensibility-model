import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormQuestionComponent } from './dynamic-form/dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form/dynamic-form.component';
import { FormIdentificationDataComponent } from './product/form-identification-data/form-identification-data.component';
import { GeneraliFormIdentificationDataComponent } from './generali/generali-form-identification-data/generali-form-identification-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent,
    FormIdentificationDataComponent,
    GeneraliFormIdentificationDataComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
