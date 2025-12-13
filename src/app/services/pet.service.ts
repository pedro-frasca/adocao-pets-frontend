import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  
  private apiUrl = 'http://localhost:8080/api/pets'; // URL da sua API
  
  // O Angular injeta o HttpClient para nós
  constructor(private http: HttpClient) { }

  public getPets(): Observable<any[]> {
    // IMPORTANTE: Obtenha o seu token JWT do Postman após o login
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhZG9jYW8tYXBpIiwic3ViIjoidGVzdGVAZW1haWwuY29tIiwiZXhwIjoxNzY1NjY2MjcyfQ.srZUd1XyAgRxO-fVmdK4le61HDffwqyibtwTGzpkgBU"; // <-- SUBSTITUA PELO SEU TOKEN REAL

    // Cria os cabeçalhos de autorização
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Faz o pedido GET com os cabeçalhos
    return this.http.get<any[]>(this.apiUrl, { headers: headers });
  }
}