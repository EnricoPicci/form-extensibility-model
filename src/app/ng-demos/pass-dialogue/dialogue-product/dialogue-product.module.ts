import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogueProductRoutingModule } from './dialogue-product-routing.module';
import { Dialogue_1_ProductService } from 'src/app/ts-demos/demo-pass-dialogue/dialogue-1-product/dialogue-1-product.service';
import { FormAComponent } from './form-a/form-a.component';
import { FormBComponent } from './form-b/form-b.component';
import { FormCComponent } from './form-c/form-c.component';
import { NgDynamicFormsModule } from 'src/app/ng-dynamic-forms/ng-dynamic-forms.module';

@NgModule({
  declarations: [FormAComponent, FormBComponent, FormCComponent],
  imports: [CommonModule, DialogueProductRoutingModule, NgDynamicFormsModule],
  providers: [Dialogue_1_ProductService],
})
export class DialogueProductModule {}
