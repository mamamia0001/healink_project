import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Patientdashboard } from './patientdashboard';

describe('Patientdashboard', () => {
  let component: Patientdashboard;
  let fixture: ComponentFixture<Patientdashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Patientdashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Patientdashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
