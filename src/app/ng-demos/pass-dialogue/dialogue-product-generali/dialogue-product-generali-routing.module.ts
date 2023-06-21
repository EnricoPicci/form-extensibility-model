import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogueProductGeneraliComponent } from './dialogue-product-generali.component';
import { FormAGeneraliComponent } from './form-a-generali/form-a-generali.component';
import { FormBComponent } from '../dialogue-product/form-b/form-b.component';
import { FormCComponent } from '../dialogue-product/form-c/form-c.component';

const routes: Routes = [
  {
    path: '',
    component: DialogueProductGeneraliComponent,
    children: [
      { path: 'form-a', component: FormAGeneraliComponent },
      { path: 'form-b', component: FormBComponent },
      { path: 'form-c', component: FormCComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DialogueProductGeneraliRoutingModule {}
