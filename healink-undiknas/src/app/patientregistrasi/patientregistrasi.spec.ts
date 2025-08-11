import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Patientregistrasi } from './patientregistrasi';

describe('Patientregistrasi', () => {
  let component: Patientregistrasi;
  let fixture: ComponentFixture<Patientregistrasi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Patientregistrasi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Patientregistrasi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
