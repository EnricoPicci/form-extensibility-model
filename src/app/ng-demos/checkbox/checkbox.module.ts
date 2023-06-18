import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckboxRoutingModule } from './checkbox-routing.module';
import { CheckboxComponent } from './checkbox.component';
import { NgDynamicFormsModule } from 'src/app/ng-dynamic-forms/ng-dynamic-forms.module';
import { DemoDynamicCheckboxState } from 'src/app/ts-demos/demo-dynamic-checkbox/demo-dynamic-checkbox.state';

@NgModule({
  declarations: [CheckboxComponent],
  imports: [CommonModule, CheckboxRoutingModule, NgDynamicFormsModule],
  providers: [DemoDynamicCheckboxState],
})
export class CheckboxModule {}
