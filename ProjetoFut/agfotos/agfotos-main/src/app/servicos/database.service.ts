import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Foto } from '../fotografia/foto/foto';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  // Nosso Tradutor
HttpOptions = {

  headers : new HttpHeaders({'Content-type' : 'application/json'})
};
  
  readonly API = 'http://localhost:3000/fotos/';

  constructor(private http: HttpClient) { }


  //Capiturar as fotos
  getFotos(){
   return this.http.get<Foto[]>(this.API)
  }

  // Metodo para cadastrar fotos
  postFotos(foto: Foto){

    //JSON.STRINGIFY(foto) - converte os dados para formato json , é uma função javascript
    return this.http.post (this.API, JSON.stringify(foto),this.HttpOptions).subscribe();
     // usamos post para enviar as informaçoes e get para enviar
  }

  //Metodo de apagar
  delFotos(id: number){  // () é o parametro, estamos identificando a foto pelo id
  return this.http.delete(this.API + id).subscribe();

  }
}
