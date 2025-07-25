import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Patientappointment } from './patientappointment';

describe('Patientappointment', () => {
  let component: Patientappointment;
  let fixture: ComponentFixture<Patientappointment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Patientappointment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Patientappointment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
