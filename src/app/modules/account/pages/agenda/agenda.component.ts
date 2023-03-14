import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';

import arLocale from '@fullcalendar/core/locales/ar';
import frLocale from '@fullcalendar/core/locales/fr';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    // initialView: 'timeGridWeek',
    initialView: 'timeGridFourDay',

    views: {
      timeGridFourDay: {
        type: 'timeGrid',
        duration: { days: 5 }
      }
    },

    plugins: [timeGridPlugin, dayGridPlugin, listPlugin, bootstrap5Plugin],
    allDaySlot: false,
    nowIndicator: true,
    displayEventTime: false,
    events: [
      { title: 'event 1', date: '2023-03-11 09:00', className: 'th-primary' },
      { title: 'event 2', date: '2023-03-12 09:00', className: 'th-secondary' },
      { title: 'event 3', date: '2023-03-12 09:00', className: 'th-tertiary' },

      { title: 'Jean Durand', start: '2023-03-14 09:00', end: '2023-03-14 09:29', className: 'tb-primary' },
      { title: 'Jeanne Petit', start: '2023-03-14 09:30', end: '2023-03-14 09:59', className: 'tb-secondary' },
      { title: 'Jean Durand', start: '2023-03-14 09:30', end: '2023-03-14 10:29', className: 'th-info' },
      { title: 'Jeanne Petit', start: '2023-03-14 10:30', end: '2023-03-14 10:49', className: 'th-secondary' },
      { title: 'John Doe', start: '2023-03-14 11:00', end: '2023-03-14 11:29', className: 'tb-danger' },
      { title: 'Sarah James', start: '2023-03-14 11:30', end: '2023-03-14 12:49', className: 'tb-secondary' },
      { title: 'Jean Durand', start: '2023-03-14 12:45', end: '2023-03-14 13:14', className: 'tb-primary' },
      { title: 'Jeanne Petit', start: '2023-03-14 12:45', end: '2023-03-14 13:14', className: 'th-secondary' },
      { title: 'Jeanne Petit', start: '2023-03-14 13:15', end: '2023-03-14 13:39', className: 'tb-secondary' },
      { title: 'Jeanne Petit', start: '2023-03-14 13:40', end: '2023-03-14 13:59', className: 'th-danger' },
      { title: 'Jean Durand', start: '2023-03-14 14:45', end: '2023-03-14 15:14', className: 'tb-danger' },
      { title: 'Jeanne Petit', start: '2023-03-14 16:45', end: '2023-03-14 17:14', className: 'th-danger' },

      { title: 'event 12', date: '2023-03-12 12:00', className: 'tb-secondary' },
      { title: 'event 13', date: '2023-03-12 12:00', className: 'tb-tertiary' },
      { title: 'event 14', date: '2023-03-13 12:00', className: 'tb-warning' },
      { title: 'event 15', date: '2023-03-16 12:00', className: 'tb-info' },
    ],
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'timeGridWeek,timeGridDay,dayGridMonth,listWeek'
    },
    locales: [ arLocale, frLocale ],
    locale: 'fr',
    themeSystem: 'bootstrap5'
  };

  selected: Date | null;

  constructor() { }

  ngOnInit(): void {
  }

  handleDateClick(arg) {
    // console.log('date click!' + arg.dateStr);
    alert('date click!' + arg.dateStr);
  }

}
