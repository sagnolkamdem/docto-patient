import { Component, OnInit } from '@angular/core';

type Place = {
  id: number;
  name: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentPlace!: Place;

  expertise!: string;

  personnalInfos = {
    name: 'Mohamed Belaiouer',
    speciality: 'Médecin généraliste',
    photo: 'assets/user.png',
  }

  presentation: string = `Le médecin généraliste accueille les enfants et les adultes pour tous types de soins médicaux généraux
  (consultation, contrôle annuel, vaccination, bilan de santé).
  Il assure également un suivi des patients dans le temps et les oriente vers des médecins spécialistes en cas de besoin.
  Je ne pratique pas la visioconférence dans mes consultations.`;

  skills: string[] = ["Médecine de l'enfant et de l'adolescent", "Radiographie", "Suivi en gynécologie"];

  placeOfConsultation: Place[] = [
    {
      id: 1,
      name: "Cabinet Putaux Rue Rouget de Lisle, 92800 Puteaux"
    },
    {
      id: 2,
      name: "Cabinet Putaux Rue Rouget de Lisle, 92800 Puteaux"
    },
  ]

  updatePresentation: boolean = false;
  updateSkills: boolean = false;
  updatePersonnalInfos: boolean = false;
  updateDisponibility: boolean = false;

  ngOnInit(): void {
    this.currentPlace = this.placeOfConsultation[0];
  }

  toggleUpdatePresentation() {
    this.updatePresentation = !this.updatePresentation;
  }

  toggleUpdateSkills() {
    this.updateSkills = !this.updateSkills;
  }

  toggleUpdatePersonnalInfos() {
    this.updatePersonnalInfos = !this.updatePersonnalInfos;
  }

  toggleUpdateDisponibility() {
    this.updateDisponibility = !this.updateDisponibility;
  }


  changePlace(value: Place) {
    this.currentPlace = value;
  }

  addSkills() {
    if (this.expertise !== '' && this.expertise !== undefined) {
      this.skills.push(this.expertise);
      this.expertise = '';
    }
  }

}
