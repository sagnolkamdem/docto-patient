import { Component } from '@angular/core';
import { Breadscrump } from 'src/app/shared/components/breadscrumb/interfaces/breadscrump.interface';

@Component({
  selector: 'app-consultation-historic',
  templateUrl: './consultation-historic.component.html',
  styleUrls: ['./consultation-historic.component.scss']
})
export class ConsultationHistoricComponent {

  breadScrump: Breadscrump[] = [
    {
      name: 'Historique',
      link: '/consultation/historique'
    },
    {
      name: 'Mohamed',
      link: ''
    },
  ]

}
