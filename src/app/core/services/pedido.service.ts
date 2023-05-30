import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  url_base = environment.servidor
  constructor(private http:HttpClient) { }
  
  listarPedido(){
    return this.http.get(`${this.url_base}/pedido`)
  }

  guardarPedido(datos: any){
    return this.http.post(`${this.url_base}/pedido`, datos)
  }

  mostrarPedido(id: any){
    return this.http.get(`${this.url_base}/pedido/${id}`)
  }

  modificarPedido(id: any, datos: any){
    return this.http.put(`${this.url_base}/pedido/${id}`, datos)
  }

   eliminarPedido(id: any){
    return this.http.delete(`${this.url_base}/pedido/${id}`)
  }
}
