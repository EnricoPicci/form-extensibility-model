import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidationCallRoutingModule } from './validation-call-routing.module';
import { ValidationCallComponent } from './validation-call.component';
import { NgDynamicFormsModule } from 'src/app/ng-dynamic-forms/ng-dynamic-forms.module';
import { DemoDynamicValidationCallService } from 'src/app/ts-demos/demo-dynamic-validation-call/demo-dynamic-validation-call.service';

@NgModule({
  declarations: [ValidationCallComponent],
  imports: [CommonModule, ValidationCallRoutingModule, NgDynamicFormsModule],
  providers: [DemoDynamicValidationCallService],
})
export class ValidationCallModule {}
