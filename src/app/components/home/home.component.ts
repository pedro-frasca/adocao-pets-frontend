import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink], // Importante para o botão funcionar
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}