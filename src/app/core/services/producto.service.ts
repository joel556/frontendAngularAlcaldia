import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url_base = environment.servidor
  constructor(private http:HttpClient) { }
  
  listarProductos(page=1){
    return this.http.get(`${this.url_base}/producto?page=${page}`)
  }

  guardarProducto(datos: any){
    return this.http.post(`${this.url_base}/producto`, datos)
  }

  mostrarProducto(id: any){
    return this.http.get(`${this.url_base}/producto/${id}`)
  }

  modificarProducto(id: any, datos: any){
    return this.http.put(`${this.url_base}/producto/${id}`, datos)
  }

   eliminarProducto(id: any){
    return this.http.delete(`${this.url_base}/producto/${id}`)
  }

  subitImagenProducto(id:number, formD:any){
    return this.http.post(`${this.url_base}/producto/${id}/subir-imagen`, formD)
  }
  

}
