import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultationComponent } from './pages/consultation/consultation.component';
import { RouterModule } from '@angular/router';
import { consultationroutes } from './routes/consultation.routes';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConsultationInfosComponent } from './pages/consultation-infos/consultation-infos.component';
import { ConsultationHistoricComponent } from './pages/consultation-historic/consultation-historic.component';
import { ConsultationDocumentsComponent } from './pages/consultation-documents/consultation-documents.component';
import { PrescriptionComponent } from './pages/consultation-documents/prescription/prescription.component';
import { CertificatComponent } from './pages/consultation-documents/certificat/certificat.component';
import { VaccinComponent } from './pages/consultation-documents/vaccin/vaccin.component';
import { OthersComponent } from './pages/consultation-documents/others/others.component';



@NgModule({
  declarations: [
    ConsultationComponent,
    ConsultationInfosComponent,
    ConsultationHistoricComponent,
    ConsultationDocumentsComponent,
    PrescriptionComponent,
    CertificatComponent,
    VaccinComponent,
    OthersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(consultationroutes)
  ]
})
export class ConsultationModule { }
