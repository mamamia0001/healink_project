import { CommonModule, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-medicallist',
  imports: [RouterModule,CommonModule,DecimalPipe],
  templateUrl: './medicinelist.html',
  styleUrls: ['./medicinelist.css']
})
export class Medicinelist {
  medicines = [
  { name: 'Paracetamol', stock: 999, price: 6000, expired: '9/9/2029' },
  { name: 'Ibuprofen', stock: 850, price: 8000, expired: '10/5/2028' },
  { name: 'Amoxicillin', stock: 500, price: 12000, expired: '12/12/2027' },
  { name: 'Ciprofloxacin', stock: 450, price: 15000, expired: '8/8/2029' },
  { name: 'Metformin', stock: 600, price: 11000, expired: '7/7/2028' },
  { name: 'Aspirin', stock: 750, price: 5000, expired: '5/5/2027' },
  { name: 'Loratadine', stock: 300, price: 7000, expired: '6/6/2029' },
  { name: 'Omeprazole', stock: 400, price: 9000, expired: '11/11/2028' },
  { name: 'Vitamin C', stock: 1000, price: 4000, expired: '3/3/2029' },
  { name: 'Dextromethorphan', stock: 350, price: 6500, expired: '4/4/2028' },
  { name: 'Hydroxychloroquine', stock: 200, price: 18000, expired: '2/2/2029' },
  { name: 'Clarithromycin', stock: 150, price: 16000, expired: '1/1/2029' }
];
}
