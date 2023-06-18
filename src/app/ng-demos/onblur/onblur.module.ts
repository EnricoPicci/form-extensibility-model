import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnblurRoutingModule } from './onblur-routing.module';
import { OnblurComponent } from './onblur.component';
import { NgDynamicFormsModule } from 'src/app/ng-dynamic-forms/ng-dynamic-forms.module';

@NgModule({
  declarations: [OnblurComponent],
  imports: [CommonModule, OnblurRoutingModule, NgDynamicFormsModule],
})
export class OnblurModule {}
