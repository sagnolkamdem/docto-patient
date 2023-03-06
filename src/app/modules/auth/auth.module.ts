import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { MailConfirmComponent } from './pages/mail-confirm/mail-confirm.component';
import { NewPasswordComponent } from './pages/new-password/new-password.component';
import { SuccessSingUpComponent } from './pages/success-sing-up/success-sing-up.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    MailConfirmComponent,
    NewPasswordComponent,
    SuccessSingUpComponent
  ],
  imports: [
    CommonModule,
    // MaterialModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
