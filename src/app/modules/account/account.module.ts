import { AgendaComponent } from './pages/agenda/agenda.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NoteComponent } from './pages/note/note.component';
import { TeamComponent } from './pages/team/team.component';
import { PatientManagementComponent } from './pages/patient-management/patient-management.component';
import { MailComponent } from './pages/mail/mail.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { NgChartsModule } from 'ng2-charts';
import { QuillModule } from 'ngx-quill';
import { NewNoteComponent } from './pages/note/new-note/new-note.component';
import { DocumentsComponent } from './pages/documents/documents.component';


@NgModule({
  declarations: [
    AgendaComponent,
    NoteComponent,
    TeamComponent,
    PatientManagementComponent,
    MailComponent,
    ActivitiesComponent,
    NewNoteComponent,
    DocumentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule,
    ReactiveFormsModule,
    SharedModule,
    AccountRoutingModule,
    QuillModule, // Add Quill Angular WYSIWYG Editor
  ]
})
export class AccountModule { }
