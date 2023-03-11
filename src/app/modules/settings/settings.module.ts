import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { settingRoutes } from './routes/setting.routes';
import { SharedModule } from 'src/app/shared/shared.module';
import { SettingsComponent } from './pages/settings/settings.component';
import { PlaceOfConsultationComponent } from './pages/place-of-consultation/place-of-consultation.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { AccountComponent } from './pages/account/account.component';
import { SecurityLogComponent } from './pages/security-log/security-log.component';
import { SignatureComponent } from './pages/signature/signature.component';



@NgModule({
  declarations: [
    SettingsComponent,
    PlaceOfConsultationComponent,
    UtilisateursComponent,
    NewUtilisateurComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(settingRoutes),
  ]
})
export class SettingsModule { }
