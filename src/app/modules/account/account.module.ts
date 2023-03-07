import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeamComponent } from './pages/team/team.component';
import { PatientManagementComponent } from './pages/patient-management/patient-management.component';
import { MailComponent } from './pages/mail/mail.component';
import { ActivitiesComponent } from './pages/activities/activities.component';


@NgModule({
  declarations: [
    TeamComponent,
    PatientManagementComponent,
    MailComponent,
    ActivitiesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
