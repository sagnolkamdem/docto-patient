import { Component, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-consultation-infos',
  templateUrl: './consultation-infos.component.html',
  styleUrls: ['./consultation-infos.component.scss']
})
export class ConsultationInfosComponent {

  @ViewChild(MatAccordion) accordion: MatAccordion;
  allergies: Array<string> = ["pollen", "Arachides", "Gluten"];

}
