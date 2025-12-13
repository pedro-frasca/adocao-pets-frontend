import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { CommonModule } from '@angular/common'; // Importe o CommonModule
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-pet-list',
  standalone: true,
  imports: [CommonModule], // Adicione o CommonModule aqui
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.scss' // Corrigido de .css para .scss
})
export class PetListComponent implements OnInit {
  
  pets: Pet[] = [];
  isLoading = true;
  error: string | null = null;

  // --- SEUS ARQUIVOS LOCAIS ---
  // Certifique-se que os nomes aqui são IGUAIS aos arquivos na pasta public/assets/pets
  private dogImages = [
    'assets/pets/cao1.jpg',
    'assets/pets/cao2.jpg',
    'assets/pets/cao3.jpg',
    'assets/pets/cao4.jpg',
  ];

  private catImages = [
    'assets/pets/gato1.jpg',
    'assets/pets/gato2.jpg',
    'assets/pets/gato3.jpg',
    'assets/pets/gato4.jpg',
    'assets/pets/gato5.jpg',
    'assets/pets/gato6.jpg',
  ];

  private rabbitImages = [
    'assets/pets/coelho1.jpg',
  ];

  private defaultImage = 'assets/pets/default.jpg';

  // Contadores para manter a ordem fixa (sem random)
  private dogCount = 0;
  private catCount = 0;
  private rabbitCount = 0;

  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.petService.getPets().subscribe({
      next: (data) => {
        // Reiniciar contadores para garantir que a ordem é sempre a mesma ao recarregar
        this.dogCount = 0;
        this.catCount = 0;
        this.rabbitCount = 0;

        this.pets = data.map(pet => ({
          ...pet,
          fotoUrl: this.distribuirFotoFixa(pet)
        }));
        this.isLoading = false;
      },
      error: (err) => {
        this.error = "Erro ao buscar dados.";
        this.isLoading = false;
      }
    });
  }

  // --- NOVA FUNÇÃO: BOTÃO DO WHATSAPP ---
  adotarPet(pet: Pet) {
    // 1. Coloque aqui o número da sua empresa (com 55 + DDD)
    const telefone = '5511999999999'; 
    
    // 2. Monta a mensagem automática
    const mensagem = `Olá! Vi o pet "${pet.nome}" no PataConnect e gostaria de saber como funciona a adoção.`;
    
    // 3. Cria o link e abre em nova aba
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  }
  // --------------------------------------

  private distribuirFotoFixa(pet: Pet): string {
    const tipo = pet.animal?.nome?.toLowerCase() || '';
    
    // LÓGICA FIXA E CÍCLICA:
    // Passa as fotos na ordem exata do array. Se acabarem, volta ao início.
    
    if (tipo.includes('gato')) {
      if (this.catImages.length === 0) return this.defaultImage;
      const img = this.catImages[this.catCount % this.catImages.length];
      this.catCount++;
      return img;
    } 
    
    else if (tipo.includes('coelho')) {
      if (this.rabbitImages.length === 0) return this.defaultImage;
      const img = this.rabbitImages[this.rabbitCount % this.rabbitImages.length];
      this.rabbitCount++;
      return img;
    } 
    
    else {
      // Cães (Padrão)
      if (this.dogImages.length === 0) return this.defaultImage;
      const img = this.dogImages[this.dogCount % this.dogImages.length];
      this.dogCount++;
      return img;
    }
  }

  handleImageError(event: any) {
    if (event.target.src !== window.location.origin + '/' + this.defaultImage) {
      event.target.src = this.defaultImage;
    }
  }
}