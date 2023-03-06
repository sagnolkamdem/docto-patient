import { ProfileDoctorComponent } from './pages/rendez-vous/profile-doctor/profile-doctor.component';
import { RendezVousComponent } from './pages/rendez-vous/rendez-vous.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Bienvenue sur Tabiblib'
    },
  },
  {
    path: 'prendre-rendez-vous',
    component: RendezVousComponent,
    data: {
      title: 'Prendre rendez-vous'
    },
  },
  {
    path: 'prendre-rendez-vous/profil-docteur',
    component: ProfileDoctorComponent,
    data: {
      title: 'Profil du docteur'
    },
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: {
      title: 'Erreur 404'
    },
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
