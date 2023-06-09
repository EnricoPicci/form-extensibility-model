import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'checkbox',
    loadChildren: () =>
      import('./ng-demos/checkbox/checkbox.module').then(
        (m) => m.CheckboxModule
      ),
  },
  {
    path: 'dropdown',
    loadChildren: () =>
      import('./ng-demos/dropdown/dropdown.module').then(
        (m) => m.DropdownModule
      ),
  },
  {
    path: 'onblur',
    loadChildren: () =>
      import('./ng-demos/onblur/onblur.module').then((m) => m.OnblurModule),
  },
  {
    path: 'validation-call',
    loadChildren: () =>
      import('./ng-demos/validation-call/validation-call.module').then(
        (m) => m.ValidationCallModule
      ),
  },
  {
    path: 'dialogue-product',
    loadChildren: () =>
      import(
        './ng-demos/pass-dialogue/dialogue-product/dialogue-product.module'
      ).then((m) => m.DialogueProductModule),
  },
  {
    path: 'dialogue-product-spain',
    loadChildren: () =>
      import(
        './ng-demos/pass-dialogue/dialogue-product-spain/dialogue-product-spain.module'
      ).then((m) => m.DialogueProductSpainModule),
  },
  { path: 'dialogue-product-generali', loadChildren: () => import('./ng-demos/pass-dialogue/dialogue-product-generali/dialogue-product-generali.module').then(m => m.DialogueProductGeneraliModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
