import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailConfirmComponent } from './pages/mail-confirm/mail-confirm.component';
import { NewPasswordComponent } from './pages/new-password/new-password.component';
import { SuccessSingUpComponent } from './pages/success-sing-up/success-sing-up.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Se connecter'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Créer mon compte'
    }
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: {
      title: 'Mot de passe oublié'
    }
  },
  {
    path: 'mail-confirm',
    component: MailConfirmComponent,
    data: {
      title: 'email de confirmation'
    }
  },
  {
    path: 'new-password',
    component:NewPasswordComponent,
    data: {
      title: 'nouveau mot de passe'
    }
  },
  {
    path: 'success-sing-up',
    component:SuccessSingUpComponent,
    data: {
      title: 'inscrit avec success'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
