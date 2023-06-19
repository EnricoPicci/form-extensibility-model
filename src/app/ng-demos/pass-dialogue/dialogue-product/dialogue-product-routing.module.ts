import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAComponent } from './form-a/form-a.component';
import { FormBComponent } from './form-b/form-b.component';
import { FormCComponent } from './form-c/form-c.component';

const routes: Routes = [
  { path: '', component: FormAComponent },
  { path: 'form-a', component: FormAComponent },
  { path: 'form-b', component: FormBComponent },
  { path: 'form-c', component: FormCComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DialogueProductRoutingModule {}
