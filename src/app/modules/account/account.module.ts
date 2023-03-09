import { AgendaComponent } from './pages/agenda/agenda.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BryntumCalendarModule } from '@bryntum/calendar-angular';

import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NoteComponent } from './pages/note/note.component';
import { TeamComponent } from './pages/team/team.component';
import { PatientManagementComponent } from './pages/patient-management/patient-management.component';
import { MailComponent } from './pages/mail/mail.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { NgChartsModule } from 'ng2-charts';
import { NewNoteComponent } from './pages/note/new-note/new-note.component';


@NgModule({
  declarations: [
    AgendaComponent,
    NoteComponent,
    TeamComponent,
    PatientManagementComponent,
    MailComponent,
    ActivitiesComponent,
    NewNoteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule,
    ReactiveFormsModule,
    SharedModule,
    BryntumCalendarModule,
    AccountRoutingModule

  ]
})
export class AccountModule { }
