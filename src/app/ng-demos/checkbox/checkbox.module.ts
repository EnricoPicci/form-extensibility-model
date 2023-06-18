import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckboxRoutingModule } from './checkbox-routing.module';
import { CheckboxComponent } from './checkbox.component';
import { NgDynamicFormsModule } from 'src/app/ng-dynamic-forms/ng-dynamic-forms.module';
import { DemoDynamicCheckboxService } from 'src/app/ts-demos/demo-dynamic-checkbox/demo-dynamic-checkbox.service';

@NgModule({
  declarations: [CheckboxComponent],
  imports: [CommonModule, CheckboxRoutingModule, NgDynamicFormsModule],
  providers: [DemoDynamicCheckboxService],
})
export class CheckboxModule {}
