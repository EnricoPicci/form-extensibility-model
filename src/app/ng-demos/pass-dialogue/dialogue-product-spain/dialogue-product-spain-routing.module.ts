import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAComponent } from '../dialogue-product/form-a/form-a.component';
import { FormCComponent } from '../dialogue-product/form-c/form-c.component';
import { FormBSpainComponent } from './form-b-spain/form-b-spain.component';

const routes: Routes = [
  { path: '', component: FormAComponent },
  { path: 'form-a', component: FormAComponent },
  { path: 'form-b', component: FormBSpainComponent },
  { path: 'form-c', component: FormCComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DialogueProductSpainRoutingModule {}
