import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnblurComponent } from './onblur.component';

const routes: Routes = [{ path: '', component: OnblurComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnblurRoutingModule { }
