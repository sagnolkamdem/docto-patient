import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { NewNoteComponent } from './new-note/new-note.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  notes:any=[1];

  constructor(private alert: AlertService) { }

  ngOnInit(): void {
  }

  addNote() {
    this.alert.openModal(NewNoteComponent, (result: any) => {
      this.notes.push(result)
    }, {}, 'md');
  }

}
