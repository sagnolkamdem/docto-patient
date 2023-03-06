import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { MoreFilterComponent } from './more-filter/more-filter.component';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.scss']
})
export class RendezVousComponent implements OnInit {

  constructor(private alert: AlertService) { }

  ngOnInit(): void {
  }

  moreFilter() {
    this.alert.openModal(MoreFilterComponent, (result: any) => {
      console.log(result);
    }, {}, 'md');
  }

}
