import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pets', component: PetListComponent },
  { path: 'login', component: LoginComponent },       // Nova Rota
  { path: 'register', component: RegisterComponent }, // Nova Rota
  { path: '**', redirectTo: '' }
];