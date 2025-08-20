import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-userregistration',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './userregistration.html',
  styleUrls: ['./userregistration.css']
})
export class Userregistration {
  selectedRole: string = '';
}
