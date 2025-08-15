import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doctor-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './doctordashboard.html',
  styleUrls: ['./doctordashboard.css']
})
export class Doctordashboard {
  patients: {
    id: string;
    name: string;
    diagnosis: string;
    symptoms: string[];
    treatmentplan: string[];
    date: string[];
    prescription: { name: string; dosage: string; instructions: string }[];
    prescriptionNote?: string;
  }[] = [
  {
    id: '001',
    name: 'John Doe',
    diagnosis: 'Femur fracture',
    symptoms: ['severe thigh pain', 'swelling', 'inability to walk'],
    treatmentplan: ['Medication'],
    date: ['12/15/2025'],
    prescription: [
      { name: 'Paracetamol', dosage: '500mg', instructions: '3 times daily after meals' },
      { name: 'Amoxicillin', dosage: '250mg', instructions: '2 times daily for 7 days' }
    ],
    prescriptionNote: 'Use walking cane and rest for at least 6 weeks.'
  },
  {
    id: '002',
    name: 'Emily Carter',
    diagnosis: 'Clavicle fracture',
    symptoms: ['shoulder pain', 'swelling', 'difficulty moving arm'],
    treatmentplan: ['Surgical procedures'],
    date: ['12/15/2025'],
    prescription: [
      { name: 'Ceftriaxone', dosage: '1g', instructions: 'Once daily intravenously' }
    ],
    prescriptionNote: 'Wear arm sling for 4–6 weeks after surgery.'
  },
  {
    id: '003',
    name: 'Michael Smith',
    diagnosis: 'Osteoporosis',
    symptoms: ['bone fragility', 'back pain', 'loss of height over time'],
    treatmentplan: ['Therapy'],
    date: ['12/15/2025'],
    prescription: [
      { name: 'Alendronate', dosage: '70mg', instructions: 'Once weekly in the morning before food' }
    ],
    prescriptionNote: 'Engage in weight-bearing exercises and take calcium supplements.'
  },
  {
    id: '004',
    name: 'Sophia Brown',
    diagnosis: 'Osteoarthritis',
    symptoms: ['joint stiffness', 'joint pain', 'reduced range of motion'],
    treatmentplan: ['Lifestyle modifications'],
    date: ['12/15/2025'],
    prescription: [
      { name: 'Ibuprofen', dosage: '400mg', instructions: 'Twice daily after meals' }
    ],
    prescriptionNote: 'Maintain healthy weight and perform low-impact exercises like swimming.'
  },
  {
    id: '005',
    name: 'David Wilson',
    diagnosis: 'Spinal disc herniation',
    symptoms: ['lower back pain', 'leg numbness', 'tingling sensation'],
    treatmentplan: ['Patient monitoring'],
    date: ['12/15/2025'],
    prescription: [
      { name: 'Naproxen', dosage: '500mg', instructions: 'Twice daily with meals' }
    ],
    prescriptionNote: 'Avoid heavy lifting and use proper posture when sitting.'
  },
  {
    id: '006',
    name: 'Olivia Johnson',
    diagnosis: 'Rib fracture',
    symptoms: ['chest pain when breathing', 'tenderness', 'swelling'],
    treatmentplan: ['Medication'],
    date: ['12/15/2025'],
    prescription: [
      { name: 'Acetaminophen', dosage: '500mg', instructions: 'Every 6 hours as needed for pain' }
    ],
    prescriptionNote: 'Avoid strenuous activities for at least 6 weeks.'
  },
  {
    id: '007',
    name: 'William Davis',
    diagnosis: 'Pelvic fracture',
    symptoms: ['pelvic pain', 'difficulty walking', 'bruising around hips'],
    treatmentplan: ['Surgical procedures'],
    date: ['12/15/2025'],
    prescription: [
      { name: 'Ketorolac', dosage: '10mg', instructions: 'Every 6 hours as needed for pain' }
    ],
    prescriptionNote: 'Follow physiotherapy plan after surgery for full recovery.'
  },
  {
    id: '008',
    name: 'Isabella Martinez',
    diagnosis: 'Scoliosis',
    symptoms: ['curved spine', 'uneven shoulders', 'back pain'],
    treatmentplan: ['Therapy'],
    date: ['12/15/2025'],
    prescription: [
      { name: 'Physical Therapy Sessions', dosage: '-', instructions: 'Attend twice a week for 3 months' }
    ],
    prescriptionNote: 'Wear prescribed back brace and maintain good posture.'
  },
  {
    id: '009',
    name: 'James Anderson',
    diagnosis: 'Carpal tunnel syndrome',
    symptoms: ['wrist pain', 'numbness in fingers', 'hand weakness'],
    treatmentplan: ['Lifestyle modifications'],
    date: ['12/15/2025'],
    prescription: [
      { name: 'Ibuprofen', dosage: '400mg', instructions: 'Twice daily as needed for pain' }
    ],
    prescriptionNote: 'Use ergonomic keyboard and take frequent breaks from typing.'
  },
  {
    id: '010',
    name: 'Mia Taylor',
    diagnosis: 'Rheumatoid arthritis',
    symptoms: ['joint swelling', 'morning stiffness', 'fatigue'],
    treatmentplan: ['Patient monitoring'],
    date: ['12/15/2025'],
    prescription: [
      { name: 'Methotrexate', dosage: '15mg', instructions: 'Once weekly' }
    ],
    prescriptionNote: 'Monitor blood tests regularly and maintain anti-inflammatory diet.'
  }
];

  searchTerm: string = '';
  sortKey: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  get filteredPatients() {
    let data = [...this.patients];

    if (this.searchTerm.trim() !== '') {
      const term = this.searchTerm.toLowerCase();
      data = data.filter(patient =>
        patient.id.toLowerCase().includes(term) ||
        patient.name.toLowerCase().includes(term) ||
        patient.diagnosis.toLowerCase().includes(term)
      );
    }

    if (this.sortKey) {
      data.sort((a, b) => {
        const valA = (a as any)[this.sortKey]?.toString().toLowerCase() || '';
        const valB = (b as any)[this.sortKey]?.toString().toLowerCase() || '';
        if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
        if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return data;
  }

  setSort(key: string) {
    if (this.sortKey === key) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortKey = key;
      this.sortDirection = 'asc';
    }
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


  selectedSymptoms: string[] | null = null;
  openSymptomsModal(patient: any) {
    this.selectedSymptoms = patient.symptoms || [];
  }
  closeSymptomsModal() {
    this.selectedSymptoms = null;
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
