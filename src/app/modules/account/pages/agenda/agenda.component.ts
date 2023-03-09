import { Component, OnInit, ViewChild } from '@angular/core';
import { BryntumCalendarComponent, BryntumProjectModelComponent } from '@bryntum/calendar-angular';
import { calendarConfig, projectConfig } from 'src/app/app.config';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {
  resources = [
      {
          id         : 1,
          name       : 'Default Calendar',
          eventColor : 'green'
      }
  ];

  events = [
      {
          id         : 1,
          name       : 'Meeting',
          startDate  : '2022-01-01T10:00:00',
          endDate    : '2022-01-01T11:00:00',
          resourceId : 1
      }
  ];

  calendarConfig: any = calendarConfig;
  projectConfig = projectConfig;

  @ViewChild('calendar') calendarComponent!: BryntumCalendarComponent;
  @ViewChild('project') projectComponent!: BryntumProjectModelComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
