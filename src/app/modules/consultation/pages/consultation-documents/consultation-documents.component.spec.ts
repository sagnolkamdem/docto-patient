import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationDocumentsComponent } from './consultation-documents.component';

describe('ConsultationDocumentsComponent', () => {
  let component: ConsultationDocumentsComponent;
  let fixture: ComponentFixture<ConsultationDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationDocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
