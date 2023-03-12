import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reason-consultation',
  templateUrl: './reason-consultation.component.html',
  styleUrls: ['./reason-consultation.component.scss']
})
export class ReasonConsultationComponent implements OnInit {
  reasons = [1,2,3];

  constructor() { }

  ngOnInit(): void {
  }
}
