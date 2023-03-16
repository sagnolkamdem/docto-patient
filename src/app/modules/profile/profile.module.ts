import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { profileRoutes } from './routes/profile.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewDisponibilityComponent } from './pages/profile/new-disponibility/new-disponibility.component';



@NgModule({
  declarations: [
    ProfileComponent,
    NewDisponibilityComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(profileRoutes)
  ]
})
export class ProfileModule { }
