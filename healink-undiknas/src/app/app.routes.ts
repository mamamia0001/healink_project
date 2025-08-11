import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { Doctordashboard } from './doctordashboard/doctordashboard';
import { Patientform } from './patientform/patientform';
import { Staffdashboard } from './staffdashboard/staffdashboard';

export const routes: Routes = [
  { path: 'doctordashboard', component: Doctordashboard },
  { path: 'patientform', component: Patientform },
  { path: 'staffdashboard', component: Staffdashboard },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }