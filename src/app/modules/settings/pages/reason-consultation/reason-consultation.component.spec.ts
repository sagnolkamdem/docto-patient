import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonConsultationComponent } from './reason-consultation.component';

describe('ReasonConsultationComponent', () => {
  let component: ReasonConsultationComponent;
  let fixture: ComponentFixture<ReasonConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReasonConsultationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReasonConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
