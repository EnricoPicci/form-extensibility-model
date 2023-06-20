import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidationCallRoutingModule } from './validation-call-routing.module';
import { ValidationCallComponent } from './validation-call.component';
import { NgDynamicFormsModule } from 'src/app/ng-dynamic-forms/ng-dynamic-forms.module';

@NgModule({
  declarations: [ValidationCallComponent],
  imports: [CommonModule, ValidationCallRoutingModule, NgDynamicFormsModule],
})
export class ValidationCallModule {}
