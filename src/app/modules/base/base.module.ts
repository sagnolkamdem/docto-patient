import { MaterialModule } from './../material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BaseRoutingModule } from './base-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    BaseRoutingModule
  ]
})
export class BaseModule { }
