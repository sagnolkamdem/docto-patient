import { MaterialModule } from './../modules/material/material.module';
import { SharedRoutingModule } from './shared-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './layouts/master/master.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { BreadscrumbComponent } from './components/breadscrumb/breadscrumb.component';
import { DashboardTabsComponent } from './components/tabs/dashboard-tabs/dashboard-tabs.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComplexDashboardTabsComponent } from './components/tabs/complex-dashboard-tabs/complex-dashboard-tabs.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { AlertErrorComponent } from './components/alert-error/alert-error.component';
import { AlertConfirmComponent } from './components/alert-confirm/alert-confirm.component';
import { SettingComponent } from './layouts/setting/setting.component';
import { SettingHeaderComponent } from './components/header/setting-header/setting-header.component';
import { BadgeComponent } from './components/badge/badge.component';


@NgModule({
  declarations: [
    MasterComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    TabsComponent,
    BreadscrumbComponent,
    DashboardTabsComponent,
    ModalComponent,
    ComplexDashboardTabsComponent,
    ToggleComponent,
    AuthComponent,
    AlertErrorComponent,
    AlertConfirmComponent,
    SettingComponent,
    SettingHeaderComponent,
    BadgeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedRoutingModule
  ],
  exports: [
    BreadscrumbComponent,
    DashboardTabsComponent,
    ModalComponent,
    MaterialModule,
    ComplexDashboardTabsComponent,
    HeaderComponent,
    TabsComponent,
    ToggleComponent,
    SettingComponent,
    BadgeComponent
  ]
})
export class SharedModule { }
