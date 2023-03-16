import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-consultation-infos',
  templateUrl: './consultation-infos.component.html',
  styleUrls: ['./consultation-infos.component.scss']
})
export class ConsultationInfosComponent {

  @ViewChild(MatAccordion) accordion: MatAccordion;
  allergies: Array<string> = ["pollen", "Arachides", "Gluten"];

  quillConfig = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      ['link'],
      ['clean'],
    ]
  };


  createPrescriptionForm: boolean = false;
  createVaccinForm: boolean = false;
  createCertificateForm: boolean = false;
  createOtherForm: boolean = false;
  createTransfereForm: boolean = false;

  toggleCreatePrescriptionForm() {
    this.createPrescriptionForm = !this.createPrescriptionForm;
  }

  toggleCreateVaccinForm() {
    this.createVaccinForm = !this.createVaccinForm;
  }

  toggleCreateCertificateForm() {
    this.createCertificateForm = !this.createCertificateForm;
  }

  toggleCreateOtherForm() {
    this.createOtherForm = !this.createOtherForm;
  }

  toggleCreateTransfereForm() {
    this.createTransfereForm = !this.createTransfereForm;
  }

}
