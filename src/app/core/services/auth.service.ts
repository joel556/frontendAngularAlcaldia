import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "./../../../environments/environment"



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url_base = environment.servidor

  constructor(private http:HttpClient) { }

  login(datos:any){
    return this.http.post(`${this.url_base}/v1/auth/login`, datos)
  }

  registro(datos:any){
    return this.http.post(`${this.url_base}/v1/auth/registro`, datos)
  }
  perfil(){
    //return this.http.get(`${this.url_base}/v1/auth/perfil`,{headers: {'Authorization': 'Bearer 15|VHG8qKEzfzHKWOiqRF0ZIquPxkohQUqcoDXAKxt4'}})
    return this.http.get(`${this.url_base}/v1/auth/perfil`)
  }
  salir(datos:any){
    return this.http.post(`${this.url_base}/v1/auth/salir`, datos)
  }
}
