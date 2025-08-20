import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Doctor {
  name: string;
  id: string;
  specialty: string;
  shift: string;
  status: 'Active' | 'Inactive';
  image: string;
}

interface Staff {
  name: string;
  id: string;
  shift: string;
  status: 'Active' | 'Inactive';
  image: string;
}

@Component({
  selector: 'app-admin',
  imports: [CommonModule, RouterModule],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class Admin {
  activeTab: 'doctors' | 'receptionist' | 'pharmacy' = 'doctors';

  doctors: Doctor[] = [
    { name: 'Dr. John Smith',   id: 'D001', specialty: 'Cardiology',  shift: '08:00 - 15:00', status: 'Active',   image: 'assets/doctors/doctor1.png' },
    { name: 'Dr. Sarah Johnson', id: 'D002', specialty: 'Dermatology', shift: '08:00 - 17:00', status: 'Active',   image: 'assets/doctors/doctor2.png' },
    { name: 'Dr. James Williams',id: 'D003', specialty: 'Neurology',   shift: '10:00 - 18:00', status: 'Inactive', image: 'assets/doctors/doctor3.png' },
    { name: 'Dr. Emily Brown',   id: 'D004', specialty: 'Pediatrics',  shift: '08:00 - 16:00', status: 'Active',   image: 'assets/doctors/doctor4.png' },
    { name: 'Dr. Michael Davis', id: 'D005', specialty: 'Orthopedics', shift: '12:00 - 20:00', status: 'Active',   image: 'assets/doctors/doctor5.png' }
  ];

  receptionists: Staff[] = [
    { name: 'Alice Carter',  id: 'R001', shift: '08:00 - 16:00', status: 'Active',   image: 'assets/staff/reception1.png' },
    { name: 'Bob Harris',    id: 'R002', shift: '10:00 - 18:00', status: 'Inactive', image: 'assets/staff/reception2.png' },
    { name: 'Clara Young',   id: 'R003', shift: '12:00 - 20:00', status: 'Active',   image: 'assets/staff/reception3.png' }
  ];

  pharmacy: Staff[] = [
    { name: 'Emma Wilson',   id: 'P001', shift: '09:00 - 17:00', status: 'Active', image: 'assets/staff/pharmacy1.png' },
    { name: 'Oliver Scott',  id: 'P002', shift: '12:00 - 20:00', status: 'Active', image: 'assets/staff/pharmacy2.png' },
    { name: 'Noah Bennett',  id: 'P003', shift: '07:00 - 15:00', status: 'Inactive', image: 'assets/staff/pharmacy3.png' }
  ];


  staffList: Staff[] = [];

  constructor() {
    this.updateStaffList();
  }

  setTab(tab: 'doctors' | 'receptionist' | 'pharmacy') {
    this.activeTab = tab;
    this.updateStaffList();
  }

  private updateStaffList() {
    if (this.activeTab === 'receptionist') {
      this.staffList = this.receptionists;
    } else if (this.activeTab === 'pharmacy') {
      this.staffList = this.pharmacy;
    } else {
      this.staffList = [];
    }
  }
}
