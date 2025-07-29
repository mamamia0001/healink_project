// src/app/login/login.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login', 
  standalone: true, 
  imports: [
    CommonModule,
    FormsModule, 
    MatIconModule, 
    RouterModule 
  ],
  templateUrl: './login.html', 
  styleUrls: ['./login.css'] 
})
export class Login {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  login() {
    if (this.email && this.password) {
      alert(`Email: ${this.email}\nPassword: ${this.password}\nRemember me: ${this.rememberMe}`);
    } else {
      alert('Please enter both email and password.');
    }
  }
}