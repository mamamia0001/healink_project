import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patientappointment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patientappointment.html',
  styleUrls: ['./patientappointment.css']
})
export class Patientappointment { 
  userName: string = 'Jahn Doe';
  hasAppointment: boolean = false;

  constructor() { }
  createAppointment(): void {
    console.log('Tombol Create Appointment diklik!');
  }
  logout(): void {
    console.log('Pengguna log out.');
  }
}
