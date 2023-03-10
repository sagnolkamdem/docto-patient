import { MaterialModule } from './modules/material/material.module';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BryntumCalendarModule } from '@bryntum/calendar-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    BryntumCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
