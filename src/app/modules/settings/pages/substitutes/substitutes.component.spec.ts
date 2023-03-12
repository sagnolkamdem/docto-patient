import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstitutesComponent } from './substitutes.component';

describe('SubstitutesComponent', () => {
  let component: SubstitutesComponent;
  let fixture: ComponentFixture<SubstitutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubstitutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubstitutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
