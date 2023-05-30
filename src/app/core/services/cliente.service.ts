import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url_base = environment.servidor
  constructor(private http:HttpClient) { }
  
  listarCliente(buscar=""){
    return this.http.get(`${this.url_base}/cliente?q=${buscar}`)
  }

  guardarCliente(datos: any){
    return this.http.post(`${this.url_base}/cliente`, datos)
  }

  mostrarCliente(id: any){
    return this.http.get(`${this.url_base}/cliente/${id}`)
  }

  modificarCliente(id: any, datos: any){
    return this.http.put(`${this.url_base}/cliente/${id}`, datos)
  }

   eliminarCliente(id: any){
    return this.http.delete(`${this.url_base}/cliente/${id}`)
  }
}
