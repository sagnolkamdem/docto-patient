import { Routes } from "@angular/router";
import { CertificatComponent } from "../pages/consultation-documents/certificat/certificat.component";
import { ConsultationDocumentsComponent } from '../pages/consultation-documents/consultation-documents.component';
import { OthersComponent } from "../pages/consultation-documents/others/others.component";
import { PrescriptionComponent } from "../pages/consultation-documents/prescription/prescription.component";
import { ReportComponent } from "../pages/consultation-documents/report/report.component";
import { VaccinComponent } from "../pages/consultation-documents/vaccin/vaccin.component";
import { ConsultationHistoricComponent } from "../pages/consultation-historic/consultation-historic.component";
import { ConsultationInfosComponent } from "../pages/consultation-infos/consultation-infos.component";
import { ConsultationComponent } from "../pages/consultation/consultation.component";


export const consultationroutes: Routes = [
    {
        path: '',
        component: ConsultationComponent,
        children: [
            {
                path: 'infos',
                component: ConsultationInfosComponent,
                data: {
                    title: 'Information de la consulation'
                }
            },
            {
                path: 'historique',
                component: ConsultationHistoricComponent,
                data: {
                    title: 'Historique'
                }
            },
            {
                path: 'documents',
                component: ConsultationDocumentsComponent,
                data: {
                    title: 'Documents'
                },
                children: [
                    {
                        path: 'prescription',
                        component: PrescriptionComponent,
                        data: {
                            title: 'Prescription'
                        },
                    },
                    {
                        path: 'certificat',
                        component: CertificatComponent,
                        data: {
                            title: 'Certificat'
                        },
                    },
                    {
                        path: 'vaccin',
                        component: VaccinComponent,
                        data: {
                            title: 'Vaccin'
                        },
                    },
                    {
                        path: 'report',
                        component: ReportComponent,
                        data: {
                            title: 'Compte remdu'
                        },
                    },
                    {
                        path: 'others',
                        component: OthersComponent,
                        data: {
                            title: 'Autres éléments'
                        },
                    },
                    {
                        path: '',
                        redirectTo: 'prescription',
                        pathMatch: 'full'
                    }
                ],
            },
            {
                path: '',
                redirectTo: 'infos',
                pathMatch: 'full'
              }
        ]
    }
]