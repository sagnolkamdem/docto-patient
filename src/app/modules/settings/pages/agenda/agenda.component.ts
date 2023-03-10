import { Component } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styles: [`
  [type='checkbox'] {
    color: #50D6B6 !important;
  }
  `]
})
export class AgendaComponent {

  createAgendaForm: boolean = false;
  updateAgendaForm: boolean = false;
  deleteAgendaForm: boolean = false;


  toggleUpdateAgendaForm() {
    this.updateAgendaForm = !this.updateAgendaForm;
  }

  toggleCreateAgendaForm() {
    this.createAgendaForm = !this.createAgendaForm;
  }

  toggleDeleteAgendaForm() {
    this.deleteAgendaForm = !this.deleteAgendaForm;
  }

}
