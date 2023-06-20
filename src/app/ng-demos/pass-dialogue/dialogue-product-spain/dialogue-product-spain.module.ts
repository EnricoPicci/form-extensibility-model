import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogueProductSpainRoutingModule } from './dialogue-product-spain-routing.module';
import { FormBSpainComponent } from './form-b-spain/form-b-spain.component';
import { NgDynamicFormsModule } from 'src/app/ng-dynamic-forms/ng-dynamic-forms.module';
import { ProductDialogueSpainComponent } from './dialogue-product-spain.component';

@NgModule({
  declarations: [ProductDialogueSpainComponent, FormBSpainComponent],
  imports: [
    CommonModule,
    DialogueProductSpainRoutingModule,
    NgDynamicFormsModule,
  ],
})
export class DialogueProductSpainModule {}
