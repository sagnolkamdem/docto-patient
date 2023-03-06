import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('showHideBackdrop', [
      state('showBackdrop', style({ opacity: 1 })),
      state('hideBackdrop', style({ opacity: 0 })),
      transition('hideBackdrop => showBackdrop', animate('.3s ease-in')),
      transition('showBackdrop => hideBackdrop', animate('.2s ease-out')),
    ]),
  ]
})
export class HomeComponent implements OnInit {

  specialities: string[] = ["Généraliste", "Pédiatre", "Psychologue", "Psychiatre", "Gynécologue", "Sage-femme", "Dermatologue", "Endocrinologue"];

  carrousselElt = [0, 1, 2, 3, 4]

  currentElt: number = 0;
  
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {

      if (this.currentElt !== this.carrousselElt.length) {
        this.currentElt++;
      }else {
        this.currentElt = 0;
      }

    }, 500);
  }

}
