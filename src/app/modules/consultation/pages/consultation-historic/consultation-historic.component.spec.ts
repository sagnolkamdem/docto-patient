import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationHistoricComponent } from './consultation-historic.component';

describe('ConsultationHistoricComponent', () => {
  let component: ConsultationHistoricComponent;
  let fixture: ComponentFixture<ConsultationHistoricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationHistoricComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
