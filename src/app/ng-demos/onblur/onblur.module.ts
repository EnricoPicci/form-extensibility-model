import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnblurRoutingModule } from './onblur-routing.module';
import { OnblurComponent } from './onblur.component';
import { NgDynamicFormsModule } from 'src/app/ng-dynamic-forms/ng-dynamic-forms.module';
import { DemoDynamicOnblurService } from 'src/app/ts-demos/demo-dynamic-onblur/demo-dynamic-onblur.service';

@NgModule({
  declarations: [OnblurComponent],
  imports: [CommonModule, OnblurRoutingModule, NgDynamicFormsModule],
  providers: [DemoDynamicOnblurService],
})
export class OnblurModule {}
