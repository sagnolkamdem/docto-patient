import { AlertErrorComponent } from './../shared/components/alert-error/alert-error.component';
import { AlertConfirmComponent } from './../shared/components/alert-confirm/alert-confirm.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private snackBar: MatSnackBar,
  	private dialog: MatDialog
  ) {}

  openSnackBar(message = '') {
    this.snackBar.open(message, 'OK', {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  }

  openError(error: any){
    this.snackBar.open(error, 'OK', {
      duration: 5000,
      verticalPosition: 'bottom',
      horizontalPosition: 'left'
    });
  }

  openModal(component: any, callback?: any, data?: any, size: string = 'lg', classes?: string | string[]) {
    let large = '';
    let height = 'none';

    if (size == 'sm') {
      large = '450px';
    } else if(size == 'md') {
      large = '560px';
    } else if(size == 'lg') {
      large = '600px';
    } else if(size == 'xl') {
      large = '750px';
    } else {
      large = '920px';
      height = '90vh';
    }

    this.dialog.open(component, {
      closeOnNavigation: false,
      disableClose: true,
      width: large,
      maxWidth: 'none',
      panelClass: classes,
      // minHeight: height,
      data: data,
      hasBackdrop: true,
      // position: {
      //   top: '46px',
      // },
    }).afterClosed().subscribe(result => {
      if (result) {
        callback(result);
      }
    });
  }

  confirm(callback?: any, data?:any) {
    this.dialog.open(AlertConfirmComponent, {
      data: data
    }).afterClosed().subscribe((result: boolean) => {
      if (result) {
        callback(result);
      }
    });
  }

  error(data: any) {
    this.dialog.open(AlertErrorComponent, {
      maxWidth: '350px',
      hasBackdrop: false,
      closeOnNavigation: true,
      // disableClose: false,
      position: {
        top: '1rem',
        right: '1rem',
      },
      data: data
    });
  }
}
