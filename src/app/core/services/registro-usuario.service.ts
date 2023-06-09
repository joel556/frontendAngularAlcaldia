import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistroUsuarioService {
  private baseUrl = environment.servidor;

  constructor(private http: HttpClient) { }

  registrarUsuario(usuario: any): Observable<any> {
    const url = `${this.baseUrl}/v1/auth/registro`;
    return this.http.post(url, usuario);
  }
}
