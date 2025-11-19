import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { CommonModule } from '@angular/common'; // Importe o CommonModule

@Component({
  selector: 'app-pet-list',
  standalone: true,
  imports: [CommonModule], // Adicione o CommonModule aqui
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.scss' // Corrigido de .css para .scss
})
export class PetListComponent implements OnInit {
  
  pets: any[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.petService.getPets().subscribe({
      next: (data) => {
        this.pets = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = "Erro ao buscar dados. Verifique o token e se a API está no ar.";
        this.isLoading = false;
        console.error(err);
      }
    });
  }
}