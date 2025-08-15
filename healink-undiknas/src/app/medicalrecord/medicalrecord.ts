import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Visit {
  visitNo: number;
  date: string;
  diagnosis: string;
  symptoms: string;
  treatmentPlan: string;
  prescription: string;
}

interface Patient {
  id: number;
  name: string;
  age: number;
  bloodType: string;
  allergies: string;
  visitHistory: Visit[];
}

@Component({
  selector: 'app-medicalrecord',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './medicalrecord.html',
  styleUrls: ['./medicalrecord.css']
})
export class Medicalrecord {
  searchTerm = '';
  
  patients: Patient[] = [
    {
      id: 1,
      name: 'John Doe',
      age: 45,
      bloodType: 'A',
      allergies: 'None',
      visitHistory: [
        { visitNo: 1, date: '12/12/2025', diagnosis: 'Femur fracture', symptoms: 'broken bone', treatmentPlan: 'Medication', prescription: 'Paracetamol' },
        { visitNo: 2, date: '01/01/2026', diagnosis: 'Femur fracture', symptoms: 'pain after surgery', treatmentPlan: 'Therapy', prescription: 'Ibuprofen' },
        { visitNo: 3, date: '03/03/2026', diagnosis: 'Full recovery', symptoms: 'no major symptoms', treatmentPlan: 'Lifestyle modifications', prescription: '' }
      ]
    },
    {
      id: 2,
      name: 'Emily Carter',
      age: 52,
      bloodType: 'B',
      allergies: 'Penicillin',
      visitHistory: [
        { visitNo: 1, date: '10/10/2025', diagnosis: 'Osteoporosis', symptoms: 'bone weakness', treatmentPlan: 'Medication', prescription: 'Calcium supplements' },
        { visitNo: 2, date: '20/12/2025', diagnosis: 'Osteoporosis', symptoms: 'frequent fractures', treatmentPlan: 'Patient monitoring', prescription: 'Vitamin D' }
      ]
    },
    {
      id: 3,
      name: 'Michael Smith',
      age: 39,
      bloodType: 'O',
      allergies: 'None',
      visitHistory: [
        { visitNo: 1, date: '15/08/2025', diagnosis: 'Osteoarthritis', symptoms: 'joint stiffness', treatmentPlan: 'Therapy', prescription: 'Diclofenac' },
        { visitNo: 2, date: '01/11/2025', diagnosis: 'Osteoarthritis', symptoms: 'joint pain', treatmentPlan: 'Lifestyle modifications', prescription: 'Glucosamine' }
      ]
    },
    {
      id: 4,
      name: 'Sophia Johnson',
      age: 28,
      bloodType: 'AB',
      allergies: 'None',
      visitHistory: [
        { visitNo: 1, date: '05/05/2025', diagnosis: 'Scoliosis', symptoms: 'curved spine', treatmentPlan: 'Therapy', prescription: 'Physical therapy sessions' },
        { visitNo: 2, date: '07/07/2025', diagnosis: 'Scoliosis', symptoms: 'back pain', treatmentPlan: 'Lifestyle modifications', prescription: 'Back brace' }
      ]
    },
    {
      id: 5,
      name: 'David Lee',
      age: 50,
      bloodType: 'A',
      allergies: 'Aspirin',
      visitHistory: [
        { visitNo: 1, date: '12/02/2025', diagnosis: 'Dislocated shoulder', symptoms: 'joint displacement', treatmentPlan: 'Surgical procedures', prescription: 'Painkillers' },
        { visitNo: 2, date: '25/02/2025', diagnosis: 'Shoulder recovery', symptoms: 'mild stiffness', treatmentPlan: 'Therapy', prescription: 'Physiotherapy' }
      ]
    },
    {
      id: 6,
      name: 'Olivia Brown',
      age: 33,
      bloodType: 'B',
      allergies: 'None',
      visitHistory: [
        { visitNo: 1, date: '01/03/2025', diagnosis: 'Spinal fracture', symptoms: 'severe back pain', treatmentPlan: 'Surgical procedures', prescription: 'Morphine' },
        { visitNo: 2, date: '01/04/2025', diagnosis: 'Spinal fracture', symptoms: 'limited movement', treatmentPlan: 'Therapy', prescription: 'Ibuprofen' }
      ]
    },
    {
      id: 7,
      name: 'Daniel White',
      age: 42,
      bloodType: 'O',
      allergies: 'None',
      visitHistory: [
        { visitNo: 1, date: '10/01/2025', diagnosis: 'Rheumatoid arthritis', symptoms: 'joint inflammation', treatmentPlan: 'Medication', prescription: 'Methotrexate' },
        { visitNo: 2, date: '20/02/2025', diagnosis: 'Rheumatoid arthritis', symptoms: 'joint swelling', treatmentPlan: 'Therapy', prescription: 'Steroid injections' }
      ]
    },
    {
      id: 8,
      name: 'Chloe Martinez',
      age: 36,
      bloodType: 'AB',
      allergies: 'Seafood',
      visitHistory: [
        { visitNo: 1, date: '15/04/2025', diagnosis: 'Herniated disc', symptoms: 'lower back pain', treatmentPlan: 'Therapy', prescription: 'Naproxen' },
        { visitNo: 2, date: '15/06/2025', diagnosis: 'Herniated disc', symptoms: 'leg numbness', treatmentPlan: 'Surgical procedures', prescription: 'Post-surgery antibiotics' }
      ]
    },
    {
      id: 9,
      name: 'James Wilson',
      age: 48,
      bloodType: 'A',
      allergies: 'None',
      visitHistory: [
        { visitNo: 1, date: '25/05/2025', diagnosis: 'Clavicle fracture', symptoms: 'shoulder pain', treatmentPlan: 'Medication', prescription: 'Paracetamol' },
        { visitNo: 2, date: '25/06/2025', diagnosis: 'Clavicle fracture', symptoms: 'limited arm movement', treatmentPlan: 'Therapy', prescription: 'Physiotherapy' }
      ]
    },
    {
      id: 10,
      name: 'Grace Taylor',
      age: 31,
      bloodType: 'B',
      allergies: 'None',
      visitHistory: [
        { visitNo: 1, date: '08/08/2025', diagnosis: 'Ankylosing spondylitis', symptoms: 'spinal stiffness', treatmentPlan: 'Medication', prescription: 'NSAIDs' },
        { visitNo: 2, date: '15/10/2025', diagnosis: 'Ankylosing spondylitis', symptoms: 'fatigue', treatmentPlan: 'Therapy', prescription: 'Stretching exercises' }
      ]
    }
  ];

  filteredPatients: Patient[] = [...this.patients];

  searchPatient(): void {
    const q = this.searchTerm.trim().toLowerCase();

    if (!q) {
      this.filteredPatients = [...this.patients];
      return;
    }

    this.filteredPatients = this.patients.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.id.toString().includes(q)
    );
  }

  isModalOpen = false;
  selectedPatient: Patient | null = null;

  openVisitHistory(patient: Patient) {
    this.selectedPatient = patient;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedPatient = null;
  }
}
