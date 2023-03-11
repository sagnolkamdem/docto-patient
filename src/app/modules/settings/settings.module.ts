import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { settingRoutes } from './routes/setting.routes';
import { SharedModule } from 'src/app/shared/shared.module';
import { SettingsComponent } from './pages/settings/settings.component';
import { PlaceOfConsultationComponent } from './pages/place-of-consultation/place-of-consultation.component';
import { UtilisateursComponent } from './pages/utilisateurs/utilisateurs.component';
import { NewUtilisateurComponent } from './pages/utilisateurs/new-utilisateur/new-utilisateur.component';



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
