import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Patientform } from './patientform/patientform';

export const routes: Routes = [
    { path: '', redirectTo: 'patientform', pathMatch: 'full' },
    { path: 'patientform', component: Patientform }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }