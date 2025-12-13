import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para o *ngIf
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, // Necessário para ocultar/mostrar botões
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive 
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'PataConnect';

  // Injetamos o AuthService para verificar se está logado
  constructor(public authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}