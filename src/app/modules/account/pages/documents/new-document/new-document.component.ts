import { Component, OnInit,Inject, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

declare var $: any;

@Component({
  selector: 'app-new-document',
  templateUrl: './new-document.component.html',
  styleUrls: ['./new-document.component.scss']
})
export class NewDocumentComponent implements OnInit {


  

  constructor(public dialogRef: MatDialogRef<NewDocumentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    $('.dropify').dropify({
      messages: {
          'default': 'Glisser et déposer des fichiers ou parcourir',
          'replace': 'Glisser et déposer des fichiers pour replacer',
          'remove':  'Retirer',
          'error':   'Ooops, une erreur c\'est produite .'
      }
  });
  }
  

  store() {
    this.dialogRef.close('1');
    }
}

