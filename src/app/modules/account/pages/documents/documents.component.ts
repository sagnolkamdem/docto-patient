import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { NewDocumentComponent } from './new-document/new-document.component';
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  notes:any=[1];

  constructor(private alert: AlertService) { }

  ngOnInit(): void {
  }

  addDocument() {
    this.alert.openModal(NewDocumentComponent, (result: any) => {
      this.notes.push(result)
    }, {}, 'md');
  }

}
