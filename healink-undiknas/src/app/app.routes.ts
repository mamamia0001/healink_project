// app.routes.ts
import { RouterModule, Routes } from '@angular/router';
import { Patientdashboard } from './patientdashboard/patientdashboard';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: 'patientdashboard', pathMatch: 'full' },
    { path: 'patientdashboard', component: Patientdashboard },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }