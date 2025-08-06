import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Staffdashboard } from './staffdashboard/staffdashboard';

export const routes: Routes = [
    { path: 'staffdashboard', component: Staffdashboard },
    { path: '', redirectTo: '/staffdashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }