import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownRoutingModule } from './dropdown-routing.module';
import { DropdownComponent } from './dropdown.component';
import { NgDynamicFormsModule } from 'src/app/ng-dynamic-forms/ng-dynamic-forms.module';
import { DemoDynamicDropdownService } from 'src/app/ts-demos/demo-dynamic-dropdown/demo-dynamic-dropdown.service';

@NgModule({
  declarations: [DropdownComponent],
  imports: [CommonModule, DropdownRoutingModule, NgDynamicFormsModule],
  providers: [DemoDynamicDropdownService],
})
export class DropdownModule {}
