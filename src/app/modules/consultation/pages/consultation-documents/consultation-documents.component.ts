import { Component } from '@angular/core';
import { DashboardTabs } from 'src/app/shared/components/tabs/dashboard-tabs/interfaces/dashboard-tabs.interface';

@Component({
  selector: 'app-consultation-documents',
  templateUrl: './consultation-documents.component.html',
  styleUrls: ['./consultation-documents.component.scss']
})
export class ConsultationDocumentsComponent {

  tabs: DashboardTabs[] = [
    {
      name: 'Ordonnance',
      link: '/consultation/documents/prescription'
    },
    {
      name: 'Certificat',
      link: '/consultation/documents/certificat'
    },
    {
      name: 'Vaccin',
      link: '/consultation/documents/vaccin'
    },
    {
      name: 'Autre',
      link: '/consultation/documents/others'
    },
  ]

}
