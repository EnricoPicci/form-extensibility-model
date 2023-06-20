import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogueProductRoutingModule } from './dialogue-product-routing.module';
import { Dialogue_ProductService } from 'src/app/ts-demos/demo-pass-dialogue/dialogue-product/dialogue-product.service';
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
  providers: [Dialogue_ProductService],
})
export class DialogueProductModule {}
