import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PetListComponent } from './components/pet-list/pet-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota padrão (Home)
  { path: 'pets', component: PetListComponent }, // Rota /pets
  { path: '**', redirectTo: '' } // Qualquer erro redireciona para Home
];