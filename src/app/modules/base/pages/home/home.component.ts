import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  specialities: string[] = ["Généraliste", "Pédiatre", "Psychologue", "Psychiatre", "Gynécologue", "Sage-femme", "Dermatologue", "Endocrinologue"];
  
  constructor() { }

  ngOnInit(): void {
  }

}
