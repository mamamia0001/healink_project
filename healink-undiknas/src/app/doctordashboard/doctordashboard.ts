import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-doctor-dashboard',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './doctordashboard.html',
  styleUrls: ['./doctordashboard.css']
})
export class Doctordashboard {
  patients: {
    id: string;
    name: string;
    diagnosis: string;
    medicalHistory: string[];
    allergies: string[];
    surgeries: string[];
  }[] = [
    {
      id: '001',
      name: 'John Doe',
      diagnosis: 'Broken bone',
      medicalHistory: ['diabetes', 'hypertension', 'bipolar'],
      allergies: ['mushroom', 'lorem ipsum'],
      surgeries: ['appendectomy']
    },
    {
      id: '002',
      name: 'Lorem',
      diagnosis: 'Ipsum',
      medicalHistory: ['asthma'],
      allergies: ['dust'],
      surgeries: []
    }
  ];

  selectedPatient: {
    id: string;
    name: string;
    diagnosis: string;
    medicalHistory: string[];
    allergies: string[];
    surgeries: string[];
  } | null = null;

  openModal(patient: any) {
    this.selectedPatient = patient;
  }

  closeModal() {
    this.selectedPatient = null;
  }

  statistics2025 = [
  { month: '01', count: 70 },
  { month: '02', count: 55 },
  { month: '03', count: 10 },
  { month: '04', count: 60 },
  { month: '05', count: 15 },
  { month: '06', count: 9 },
  { month: '07', count: 11 },
  { month: '08', count: 13 },
  { month: '09', count: 7 },
  { month: '10', count: 14 },
  { month: '11', count: 10 },
  { month: '12', count: 12 }
];

getStatisticPolylinePoints(): string {
  const maxY = 100;
  const scaleY = 60 / maxY;
  const stepX = 200 / (this.statistics2025.length - 1);
  return this.statistics2025
    .map((stat, i) => {
      const x = i * stepX;
      const y = 80 - (stat.count * scaleY);
      return `${x},${y}`;
    })
    .join(' ');
}
}
