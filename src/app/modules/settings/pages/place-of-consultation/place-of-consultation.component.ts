import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-of-consultation',
  templateUrl: './place-of-consultation.component.html',
  styleUrls: ['./place-of-consultation.component.scss']
})
export class PlaceOfConsultationComponent implements OnInit {

  createPlaceForm: boolean = false;

  open: boolean = false;

  plage: string[] = ["08h", "08h-30", "09h", "09h-30", "10h", "10h-30", "11h", "11h-30", "12h", "12h-30", "13h", "13h-30", "14h", "14h-30", "15h", "15h-30", "16h", "16h-30", "17h", "17h-30", "18h", "18h-30", "19", "19h-30", "20h", "20h-30", "21h", "21h-30", "22h", "22h-30", "23h", "23h-30"];

  openHours = [
    {
      day: "lundi",
      open: true
    },
    {
      day: "mardi",
      open: true
    },
    {
      day: "mercredi",
      open: true
    },
    {
      day: "jeudi",
      open: true
    },
    {
      day: "samedi",
      open: false
    },
    {
      day: "Dimanche",
      open: true
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getToggleResult(value: boolean) {
    this.open = value;
  }

  toggleCreatePlaceForm() {
    this.createPlaceForm = !this.createPlaceForm;
  }

}
