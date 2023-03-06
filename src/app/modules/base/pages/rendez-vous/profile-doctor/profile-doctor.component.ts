import { ConfirmRendezVousComponent } from './confirm-rendez-vous/confirm-rendez-vous.component';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-profile-doctor',
  templateUrl: './profile-doctor.component.html',
  styleUrls: ['./profile-doctor.component.scss']
})
export class ProfileDoctorComponent implements OnInit, AfterViewInit {
  current_step = 0;
  total_step = 0;
  steps = document.querySelectorAll('.multiple-step .step');

  constructor(private alert: AlertService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.steps = document.querySelectorAll('.multiple-step .step');
    this.total_step = this.steps.length;

    this.show(this.current_step);
  }

  prev() {
    if (this.current_step > 0) {
      this.current_step--;
      this.show(this.current_step);
    }
  }

  next() {
    if (this.current_step < (this.total_step-1)) {
      this.current_step++;
      this.show(this.current_step);
    }
  }

  show(i: number) {
    if (i >= 0 && i < this.total_step) {
      this.steps.forEach(elt => {
        elt.classList.add('d-none');
      });
      this.steps.item(i).classList.remove('d-none');
    }
  }

  confirm() {
    this.alert.openModal(ConfirmRendezVousComponent, (result: any) => {
      if (result) {
        this.next();
      }
    }, {}, 'sm');
  }

}
