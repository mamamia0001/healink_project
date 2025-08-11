import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { NgModule } from '@angular/core';
import { Doctordashboard } from './doctordashboard/doctordashboard';
import { Patientform } from './patientform/patientform';
import { Staffdashboard } from './staffdashboard/staffdashboard';
import { Patientregistrasi } from './patientregistrasi/patientregistrasi';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'doctordashboard', component: Doctordashboard },
  { path: 'patientform', component: Patientform },
  { path: 'staffdashboard', component: Staffdashboard },
  { path: 'patientregistrasi', component: Patientregistrasi },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }