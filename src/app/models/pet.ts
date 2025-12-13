export interface Pet {
  id: number;
  nome: string;
  idade: number;
  sexo: string; // A sua API retorna "Macho"/"Fêmea" como string ou Enum
  peso: number;
  saude: string;
  status: string; // "disponivel" ou "adotado"
  animal: {
    id: number;
    nome: string; // Ex: "Cachorro", "Gato"
  };
  raca: {
    id: number;
    nome: string;
  };
  // Campo opcional para a foto que vamos gerar no front
  fotoUrl?: string; 
}