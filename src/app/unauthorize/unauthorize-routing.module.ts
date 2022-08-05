import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnauthorizePage } from './unauthorize.page';

const routes: Routes = [
  {
    path: '',
    component: UnauthorizePage
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnauthorizePageRoutingModule {}
