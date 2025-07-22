import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }