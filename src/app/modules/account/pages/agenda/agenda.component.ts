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
    initialView: 'timeGridWeek',
    plugins: [timeGridPlugin, dayGridPlugin, listPlugin, bootstrap5Plugin],
    // dateClick: this.handleDateClick.bind(this), // MUST ensure `this` context is maintained
    allDaySlot: false,
    nowIndicator: true,
    displayEventTime: false,
    events: [
      { title: 'event 1', date: '2023-03-11 09:00', className: 'th-primary' },
      { title: 'event 2', date: '2023-03-12 09:00', className: 'th-secondary' },
      { title: 'event 3', date: '2023-03-12 09:00', className: 'th-tertiary' },
      { title: 'event 4', start: '2023-03-13 09:00', end: '2023-03-13 09:30', className: 'th-warning' },
      { title: 'event 44', start: '2023-03-13 09:30', end: '2023-03-13 10:00', className: 'th-danger' },
      { title: 'event 5', date: '2023-03-14 09:00', className: 'th-info' },
      { title: 'event 11', date: '2023-03-11 12:00', className: 'tb-primary' },
      { title: 'event 12', date: '2023-03-12 12:00', className: 'tb-secondary' },
      { title: 'event 13', date: '2023-03-12 12:00', className: 'tb-tertiary' },
      { title: 'event 14', date: '2023-03-13 12:00', className: 'tb-warning' },
      { title: 'event 15', date: '2023-03-14 12:00', className: 'tb-info' },
    ],
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'timeGridWeek,timeGridDay,dayGridMonth,listWeek'
    },
    locales: [arLocale, frLocale],
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
