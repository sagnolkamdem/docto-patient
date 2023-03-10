import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-management',
  templateUrl: './patient-management.component.html',
  styleUrls: ['./patient-management.component.scss']
})
export class PatientManagementComponent implements OnInit {

  tabs = ["patients", "liste d'attente"]
  currentPage:  "patients" | "liste d'attente" = "patients";
  currentElement: string = "patients";
  createPatientForm: boolean = false;
  deletePatientForm: boolean = false;
  patientType: 'enfant' | 'adulte' = 'enfant';

  constructor() { }

  ngOnInit(): void {
  }

  changePage(value?: string) {
    if (value && value !== this.currentPage) {
      this.currentPage === "patients" ? this.currentPage = "liste d'attente" : this.currentPage = "patients";
      this.currentElement = value;
    }
  }

  toggleCreatePatientForm() {
    this.createPatientForm = !this.createPatientForm;
  }

  toggleDeletePatientForm() {
    this.deletePatientForm = !this.deletePatientForm;
  }

}
