import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doctordashboard.html',
  styleUrls: ['./doctordashboard.css']
})
export class Doctordashboard {
  patients: {
  id: string;
  age: number;
  name: string;
  diagnosis: string;
  phone: string;
}[] = [
  {
    id: '001',
    age: 59,
    name: 'John Doe',
    diagnosis: 'Broken bone',
    phone: '08311122333'
  },
  {
    id: '002',
    age: 59,
    name: 'Lorem',
    diagnosis: 'Ipsum',
    phone: 'xxxxxxxxxxx'
  }
];
}
