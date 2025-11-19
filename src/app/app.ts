import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PetListComponent } from './components/pet-list/pet-list.component'; // 1. Importe o componente

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PetListComponent // 2. Adicione-o aqui
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'adocao-pets-frontend-angular';
}