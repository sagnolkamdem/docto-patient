import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationInfosComponent } from './consultation-infos.component';

describe('ConsultationInfosComponent', () => {
  let component: ConsultationInfosComponent;
  let fixture: ComponentFixture<ConsultationInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationInfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
