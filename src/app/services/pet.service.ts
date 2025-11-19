import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  
  private apiUrl = 'http://localhost:8080/api/pets'; // URL da sua API
  
  // O Angular injeta o HttpClient para nós
  constructor(private http: HttpClient) { }

  public getPets(): Observable<any[]> {
    // IMPORTANTE: Obtenha o seu token JWT do Postman após o login
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhZG9jYW8tYXBpIiwic3ViIjoibmljb0BlbWFpbC5jb20iLCJleHAiOjE3NjM0Nzg0NTB9.XimNB0ZuoVImS227FgV0BTtSgUP6p0JDFCAAyzVWuOU"; // <-- SUBSTITUA PELO SEU TOKEN REAL

    // Cria os cabeçalhos de autorização
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Faz o pedido GET com os cabeçalhos
    return this.http.get<any[]>(this.apiUrl, { headers: headers });
  }
}