import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgDynamicFormsModule } from 'src/app/ng-dynamic-forms/ng-dynamic-forms.module';

import { DialogueProductGeneraliRoutingModule } from './dialogue-product-generali-routing.module';
import { DialogueProductGeneraliComponent } from './dialogue-product-generali.component';
import { FormAGeneraliComponent } from './form-a-generali/form-a-generali.component';

@NgModule({
  declarations: [DialogueProductGeneraliComponent, FormAGeneraliComponent],
  imports: [
    CommonModule,
    DialogueProductGeneraliRoutingModule,
    NgDynamicFormsModule,
  ],
})
export class DialogueProductGeneraliModule {}
