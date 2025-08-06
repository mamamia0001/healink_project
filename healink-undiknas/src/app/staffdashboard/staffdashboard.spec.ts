import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Staffdashboard } from './staffdashboard';

describe('Staffdashboard', () => {
  let component: Staffdashboard;
  let fixture: ComponentFixture<Staffdashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Staffdashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Staffdashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
