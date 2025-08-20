import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pharmacydashboard } from './pharmacydashboard';

describe('Pharmacydashboard', () => {
  let component: Pharmacydashboard;
  let fixture: ComponentFixture<Pharmacydashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pharmacydashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pharmacydashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
