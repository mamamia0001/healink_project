import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patientappointment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patientappointment.html',
  styleUrls: ['./patientappointment.css']
})
export class Patientappointment {
  showModal = false;
  userName: string = 'Jahn Doe';
  hasAppointment: boolean = false;

  selectedDivision: string = '';
  selectedDoctor: string = '';
  appointmentDate: string = '';

  appointments: { division: string, doctor: string, date: string }[] = [];

  submitAppointment() {
    if (this.selectedDivision && this.selectedDoctor && this.appointmentDate) {
      this.appointments.push({
        division: this.selectedDivision,
        doctor: this.selectedDoctor,
        date: this.appointmentDate
      });

      this.hasAppointment = true;
      this.showModal = false;

      // Reset form
      this.selectedDivision = '';
      this.selectedDoctor = '';
      this.appointmentDate = '';
    } else {
      alert('Please fill out all fields before submitting.');
    }
  }
}
