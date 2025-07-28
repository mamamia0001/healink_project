import { RouterModule, Routes } from '@angular/router';
import { Doctordashboard } from './doctordashboard/doctordashboard';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: 'doctordashboard', pathMatch: 'full' },
    { path: 'doctordashboard', component: Doctordashboard },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }