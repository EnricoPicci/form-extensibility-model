import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAComponent } from './ng-demo/demo-navigation/form-a/form-a.component';
import { FormBComponent } from './ng-demo/demo-navigation/form-b/form-b.component';
import { FormCComponent } from './ng-demo/demo-navigation/form-c/form-c.component';

const routes: Routes = [
  { path: 'form-a', component: FormAComponent },
  { path: 'form-b', component: FormBComponent },
  { path: 'form-c', component: FormCComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
