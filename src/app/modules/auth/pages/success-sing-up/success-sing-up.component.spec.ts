import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessSingUpComponent } from './success-sing-up.component';

describe('SuccessSingUpComponent', () => {
  let component: SuccessSingUpComponent;
  let fixture: ComponentFixture<SuccessSingUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessSingUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessSingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
