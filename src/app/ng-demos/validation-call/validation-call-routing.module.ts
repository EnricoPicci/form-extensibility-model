import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidationCallComponent } from './validation-call.component';

const routes: Routes = [{ path: '', component: ValidationCallComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidationCallRoutingModule { }
