import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { FormAComponent } from './form-a/form-a.component';
import { FormBComponent } from './form-b/form-b.component';
import { FormCComponent } from './form-c/form-c.component';
import { ProductDialogueComponent } from './dialogue-product.component';
import { FormDComponent } from './form-d/form-d.component';

// Code to be personalized for each dialogue
// define the routes for the child components
export const dialogueProductFormRoutes = [
  { path: 'form-a', component: FormAComponent },
  { path: 'form-b', component: FormBComponent },
  { path: 'form-c', component: FormCComponent },
  { path: 'form-d', component: FormDComponent },
  { path: '', component: FormAComponent },
];

// this code has to be changed, with respect to the code generated by the Angular CLI,
// setting the children property with the formRoutes variable defined above
const routes: Routes = [
  {
    path: '',
    component: ProductDialogueComponent,
    children: dialogueProductFormRoutes,
  },
];

// Standard code generated by Angular CLI and that has to be kept as is
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DialogueProductRoutingModule {}
