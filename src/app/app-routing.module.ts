import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authorize',
    loadChildren: () => import('./authorize/authorize.module').then(m => m.AuthorizePageModule)
  },
  {
    path: 'unauthorize',
    loadChildren: () => import('./unauthorize/unauthorize.module').then(m => m.UnauthorizePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./unauthorize/login/login.module').then((m) => m.LoginPageModule),
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
