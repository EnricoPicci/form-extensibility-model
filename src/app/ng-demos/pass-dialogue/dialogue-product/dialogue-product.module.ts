import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogueProductRoutingModule } from './dialogue-product-routing.module';
import { FormAComponent } from './form-a/form-a.component';
import { FormBComponent } from './form-b/form-b.component';
import { FormCComponent } from './form-c/form-c.component';
import { NgDynamicFormsModule } from 'src/app/ng-dynamic-forms/ng-dynamic-forms.module';
import { ProductDialogueComponent } from './dialogue-product.component';

@NgModule({
  declarations: [
    ProductDialogueComponent,
    FormAComponent,
    FormBComponent,
    FormCComponent,
  ],
  imports: [CommonModule, DialogueProductRoutingModule, NgDynamicFormsModule],
})
export class DialogueProductModule {}
