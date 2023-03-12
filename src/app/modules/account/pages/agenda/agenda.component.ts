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
    events: [
      { title: 'event 1', date: '2023-03-11', className: 'bg-primary' },
      { title: 'event 2', date: '2023-03-12', className: 'bg-secondary' },
      { title: 'event 3', date: '2023-03-12', className: 'bg-tertiary' },
      { title: 'event 4', date: '2023-03-13', className: 'bg-warning' },
      { title: 'event 5', date: '2023-03-14', className: 'bg-info' },
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
