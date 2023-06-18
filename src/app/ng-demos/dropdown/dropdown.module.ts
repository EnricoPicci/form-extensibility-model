import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownRoutingModule } from './dropdown-routing.module';
import { DropdownComponent } from './dropdown.component';
import { NgDynamicFormsModule } from 'src/app/ng-dynamic-forms/ng-dynamic-forms.module';

@NgModule({
  declarations: [DropdownComponent],
  imports: [CommonModule, DropdownRoutingModule, NgDynamicFormsModule],
})
export class DropdownModule {}
