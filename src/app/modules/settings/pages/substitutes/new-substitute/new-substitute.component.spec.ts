import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSubstituteComponent } from './new-substitute.component';

describe('NewSubstituteComponent', () => {
  let component: NewSubstituteComponent;
  let fixture: ComponentFixture<NewSubstituteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSubstituteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSubstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
