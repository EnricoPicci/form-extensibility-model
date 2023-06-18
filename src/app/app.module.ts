import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductFormIdentificationDataComponent } from './ng-product/form-identification-data/product-form-identification-data.component';
import { GeneraliFormIdentificationDataComponent } from './ng-generali/form-identification-data/generali-form-identification-data.component';
import { ProductFormAddressComponent } from './ng-product/form-address/product-form-address.component';
import { GeneraliFormAddressComponent } from './ng-generali/form-address/generali-form-address.component';
import { NgDynamicFormsModule } from './ng-dynamic-forms/ng-dynamic-forms.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductFormIdentificationDataComponent,
    GeneraliFormIdentificationDataComponent,
    ProductFormAddressComponent,
    GeneraliFormAddressComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgDynamicFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
