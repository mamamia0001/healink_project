import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-staff-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './staffdashboard.html',
  styleUrls: ['./staffdashboard.css']
})
export class Staffdashboard {
  currentDate: string = '';

  patients = [
    { id: '001', name: 'John Doe', age: 54, address: 'Denpasar', symptom: 'Demam' },
    { id: '002', name: 'Jane Doe', age: 45, address: 'Denpasar', symptom: 'Batuk' },
    { id: '003', name: 'Michael', age: 30, address: 'Denpasar', symptom: 'Sakit Kepala' },
    { id: '004', name: 'Sarah', age: 27, address: 'Denpasar', symptom: 'Flu' }
  ];

  constructor() {
    this.setDate();
  }

  setDate() {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    this.currentDate = today.toLocaleDateString('en-GB', options).toLowerCase();
  }
}
