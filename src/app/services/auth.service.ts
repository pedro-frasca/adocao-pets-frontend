import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth'; 

  constructor(private http: HttpClient) { }

  login(dados: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, dados).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          // NOVO: Salva o nome também
          localStorage.setItem('user_name', response.nome);
        }
      })
    );
  }

  register(dados: any): Observable<any> {
    // Ajuste a URL se o seu endpoint de registro for diferente (ex: /api/usuarios/cadastrar)
    return this.http.post(`http://localhost:8080/api/usuarios/cadastrar`, dados);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user_name'); // Limpa o nome
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // NOVO: Método para pegar o nome salvo
  getUserName(): string {
    return localStorage.getItem('user_name') || 'Visitante';
  }
}