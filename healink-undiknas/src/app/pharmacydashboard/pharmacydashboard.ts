import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-staff-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pharmacydashboard.html',
  styleUrls: ['./pharmacydashboard.css']
})
export class Pharmacydashboard {
  currentDate: string = '';

  prescriptions = [
    { id: '001', name: 'John Doe', age: 54, address: 'Denpasar', phonenumber: '081234567890' },
    { id: '002', name: 'Jane Doe', age: 45, address: 'Denpasar', phonenumber: '081234567890' },
    { id: '003', name: 'Michael', age: 30, address: 'Denpasar', phonenumber: '081234567890' },
    { id: '004', name: 'Sarah', age: 27, address: 'Denpasar', phonenumber: '081234567890' }
  ];
}