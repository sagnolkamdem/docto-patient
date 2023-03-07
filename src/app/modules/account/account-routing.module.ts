import { PatientManagementComponent } from './pages/patient-management/patient-management.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { MailComponent } from './pages/mail/mail.component';
import { TeamComponent } from './pages/team/team.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'agenda',
    component: AgendaComponent,
    data: {
      title: 'Agenda'
    }
  },
  {
    path: 'team',
    component: TeamComponent,
    data: {
      title: 'Team'
    }
  },
  {
    path: 'mail',
    component: MailComponent,
    data: {
      title: 'Email'
    }
  },
  {
    path: 'activities',
    component: ActivitiesComponent,
    data: {
      title: 'Activités'
    }
  },
  {
    path: 'patient-management',
    component: PatientManagementComponent,
    data: {
      title: 'Activités'
    }
  },

  {
    path: '',
    redirectTo: 'agenda',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
