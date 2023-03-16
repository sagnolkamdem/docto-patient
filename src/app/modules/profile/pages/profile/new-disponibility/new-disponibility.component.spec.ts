import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDisponibilityComponent } from './new-disponibility.component';

describe('NewDisponibilityComponent', () => {
  let component: NewDisponibilityComponent;
  let fixture: ComponentFixture<NewDisponibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDisponibilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDisponibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
