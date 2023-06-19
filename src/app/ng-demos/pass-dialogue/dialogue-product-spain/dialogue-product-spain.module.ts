import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogueProductSpainRoutingModule } from './dialogue-product-spain-routing.module';
import { FormBSpainComponent } from './form-b-spain/form-b-spain.component';
import { Dialogue_Product_Spain_Service } from 'src/app/ts-demos/demo-pass-dialogue/dialogue-product-spain/dialogue-product-spain.service';
import { NgDynamicFormsModule } from 'src/app/ng-dynamic-forms/ng-dynamic-forms.module';
import { Dialogue_ProductService } from 'src/app/ts-demos/demo-pass-dialogue/dialogue-product/dialogue-product.service';

@NgModule({
  declarations: [FormBSpainComponent],
  imports: [
    CommonModule,
    DialogueProductSpainRoutingModule,
    NgDynamicFormsModule,
  ],
  providers: [Dialogue_Product_Spain_Service, Dialogue_ProductService],
})
export class DialogueProductSpainModule {}
