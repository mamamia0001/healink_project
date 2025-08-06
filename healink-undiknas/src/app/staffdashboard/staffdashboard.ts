import { Component } from '@angular/core';

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staffdashboard.html',
  styleUrls: ['./staffdashboard.css']
})
export class Staffdashboard {
  doctors = [
    { name: 'Dr. A', img: 'assets/doc1.jpg' },
    { name: 'Dr. B', img: 'assets/doc2.jpg' },
    { name: 'Dr. C', img: 'assets/doc3.jpg' }
  ];

  currentDoctorIndex = 1;

  get currentDoctor() {
    return this.doctors[this.currentDoctorIndex];
  }

  previousDoctor() {
    if (this.currentDoctorIndex > 0) this.currentDoctorIndex--;
  }

  nextDoctor() {
    if (this.currentDoctorIndex < this.doctors.length - 1) this.currentDoctorIndex++;
  }
}
