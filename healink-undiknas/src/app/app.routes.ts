import { Routes } from '@angular/router';

export const routes: Routes = [
         { path: 'patientappointment', 
        loadComponent: () => import('./patientappointment/patientappointment').then(m => m.Patientappointment)} 
];
