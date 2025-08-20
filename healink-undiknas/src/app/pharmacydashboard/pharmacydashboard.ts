import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pharmacydashboard',
  imports: [CommonModule, RouterModule],
  templateUrl: './pharmacydashboard.html',
  styleUrls: ['./pharmacydashboard.css']
})
export class Pharmacydashboard {
  username: string = 'Sherla';
  currentDate: string;
  
  prescriptions = [
    { patient: 'John Doe', doctor: 'Orthopedi' },
    { patient: 'John Doe', doctor: 'Orthopedi' },
    { patient: 'John Doe', doctor: 'Orthopedi' },
    { patient: 'John Doe', doctor: 'Orthopedi' },
    { patient: 'John Doe', doctor: 'Orthopedi' },
    { patient: 'John Doe', doctor: 'Orthopedi' },
    { patient: 'John Doe', doctor: 'Orthopedi' },
  ];

  constructor() {
    const today = new Date();
    this.currentDate = today.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }
}
