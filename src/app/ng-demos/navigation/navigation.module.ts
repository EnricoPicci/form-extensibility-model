import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { FormAComponent } from './form-a/form-a.component';
import { FormBComponent } from './form-b/form-b.component';
import { FormCComponent } from './form-c/form-c.component';
import { DemoDynamicNavigationService } from 'src/app/ts-demos/demo-navigation/demo-navigation.service';
import { NgDynamicFormsModule } from 'src/app/ng-dynamic-forms/ng-dynamic-forms.module';

@NgModule({
  declarations: [FormAComponent, FormBComponent, FormCComponent],
  imports: [CommonModule, NavigationRoutingModule, NgDynamicFormsModule],
  providers: [DemoDynamicNavigationService],
})
export class NavigationModule {}
