import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-doctor-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
    prescription: { name: string; dosage: string; instructions: string }[];
    prescriptionNote?: string;
  }[] = [
    {
  id: '001',
  name: 'John Doe',
  diagnosis: 'Fraktur tulang paha',
  medicalHistory: ['diabetes', 'hypertension'],
  allergies: ['mushroom'],
  surgeries: ['appendectomy'],
  prescription: [
    { name: 'Paracetamol', dosage: '500mg', instructions: '3x sehari setelah makan' },
    { name: 'Amoxicillin', dosage: '250mg', instructions: '2x sehari selama 7 hari' }
  ],
  prescriptionNote: 'Gunakan tongkat bantu jalan, istirahat minimal 6 minggu.'
},
{
  id: '002',
  name: 'Sarah Smith',
  diagnosis: 'Osteoporosis',
  medicalHistory: ['anemia'],
  allergies: ['penicillin'],
  surgeries: [],
  prescription: [
    { name: 'Alendronate', dosage: '70mg', instructions: '1x seminggu, pagi sebelum makan' },
    { name: 'Kalsium karbonat + Vitamin D', dosage: '500mg', instructions: '2x sehari setelah makan' }
  ],
  prescriptionNote: 'Perbanyak konsumsi makanan tinggi kalsium, lakukan olahraga ringan.'
},
{
  id: '003',
  name: 'Michael Johnson',
  diagnosis: 'Artritis',
  medicalHistory: ['hipertensi'],
  allergies: ['ibuprofen'],
  surgeries: [],
  prescription: [
    { name: 'Meloxicam', dosage: '15mg', instructions: '1x sehari setelah makan' },
    { name: 'Glucosamine', dosage: '500mg', instructions: '2x sehari' }
  ],
  prescriptionNote: 'Hindari aktivitas berat pada sendi, lakukan terapi fisik secara rutin.'
},
{
  id: '004',
  name: 'Lisa Brown',
  diagnosis: 'Skoliosis',
  medicalHistory: ['asma'],
  allergies: ['seafood'],
  surgeries: [],
  prescription: [
    { name: 'Paracetamol', dosage: '500mg', instructions: 'Jika nyeri, maksimal 3x sehari' },
    { name: 'Vitamin D3', dosage: '1000 IU', instructions: '1x sehari setelah makan' }
  ],
  prescriptionNote: 'Gunakan brace sesuai anjuran dokter dan lakukan latihan peregangan punggung.'
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


  selectedPrescription: { name: string; dosage: string; instructions: string }[] | null = null;
  selectedPrescriptionNote: string = '';

  openPrescriptionModal(patient: any) {
    this.selectedPrescription = patient.prescription;
    this.selectedPrescriptionNote = patient.prescriptionNote || 'Follow doctor\'s instructions carefully.';
  }

  closePrescriptionModal() {
    this.selectedPrescription = null;
    this.selectedPrescriptionNote = '';
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
