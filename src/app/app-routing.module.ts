import { AuthComponent } from './shared/layouts/auth/auth.component';
import { DashboardComponent } from './shared/layouts/dashboard/dashboard.component';
import { MasterComponent } from './shared/layouts/master/master.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },

  {
    path: '',
    component: MasterComponent,
    loadChildren: () => import('./modules/base/base.module').then(m => m.BaseModule)
  },

  {
    path: 'account',
    component: DashboardComponent,
    loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule)
  },

  {
    path: 'settings',
    loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule)
  },

  {
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)
  },

  {
    path: 'consultation',
    loadChildren: () => import('./modules/consultation/consultation.module').then(m => m.ConsultationModule)
  },

  {
    path: '**',
    redirectTo: '/not-found',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
