import { Component } from '@angular/core';

@Component({
  selector: 'app-new-disponibility',
  templateUrl: './new-disponibility.component.html',
  styleUrls: ['./new-disponibility.component.scss']
})
export class NewDisponibilityComponent {
  hours: number[] = [];

  generate() {
    this.hours = [0,1,2,3,4,5,6,7,9,10];
  }
}
