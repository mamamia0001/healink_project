import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-medicallist',
  imports: [RouterModule],
  templateUrl: './medicinelist.html',
  styleUrls: ['./medicinelist.css']
})
export class Medicinelist {
  medicines = [
    { name: 'Paracetamol', stock: 999, price: 6000, expired: '9/9/2029' },
    { name: 'Paracetamol', stock: 999, price: 6000, expired: '9/9/2029' },
    { name: 'Paracetamol', stock: 999, price: 6000, expired: '9/9/2029' },
    { name: 'Paracetamol', stock: 999, price: 6000, expired: '9/9/2029' },
    { name: 'Paracetamol', stock: 999, price: 6000, expired: '9/9/2029' },
    { name: 'Paracetamol', stock: 999, price: 6000, expired: '9/9/2029' },
    { name: 'Paracetamol', stock: 999, price: 6000, expired: '9/9/2029' },
    { name: 'Paracetamol', stock: 999, price: 6000, expired: '9/9/2029' },
    { name: 'Paracetamol', stock: 999, price: 6000, expired: '9/9/2029' },
    { name: 'Paracetamol', stock: 999, price: 6000, expired: '9/9/2029' },
    { name: 'Paracetamol', stock: 999, price: 6000, expired: '9/9/2029' },
    { name: 'Paracetamol', stock: 999, price: 6000, expired: '9/9/2029' }
  ];
}
