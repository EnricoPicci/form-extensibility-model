import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgDynamicFormsModule } from './ng-dynamic-forms/ng-dynamic-forms.module';

@NgModule({
  declarations: [AppComponent],
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
