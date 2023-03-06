import { MaterialModule } from './../material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BaseRoutingModule } from './base-routing.module';
import { RendezVousComponent } from './pages/rendez-vous/rendez-vous.component';
import { ProfileDoctorComponent } from './pages/rendez-vous/profile-doctor/profile-doctor.component';
import { MoreFilterComponent } from './pages/rendez-vous/more-filter/more-filter.component';
import { ConfirmRendezVousComponent } from './pages/rendez-vous/profile-doctor/confirm-rendez-vous/confirm-rendez-vous.component';


@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    RendezVousComponent,
    ProfileDoctorComponent,
    MoreFilterComponent,
    ConfirmRendezVousComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    BaseRoutingModule
  ]
})
export class BaseModule { }
