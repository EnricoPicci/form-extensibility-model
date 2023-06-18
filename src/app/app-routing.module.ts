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
    path: 'navigation',
    loadChildren: () =>
      import('./ng-demos/navigation/navigation.module').then(
        (m) => m.NavigationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
