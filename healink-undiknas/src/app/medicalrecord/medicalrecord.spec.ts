import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Medicalrecord } from './medicalrecord';

describe('Medicalrecord', () => {
  let component: Medicalrecord;
  let fixture: ComponentFixture<Medicalrecord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Medicalrecord]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Medicalrecord);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
