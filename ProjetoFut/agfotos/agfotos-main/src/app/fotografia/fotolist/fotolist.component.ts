import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicos/database.service';

import { Foto } from '../foto/foto';

@Component({
  selector: 'app-fotolist',
  templateUrl: './fotolist.component.html',
  styleUrls: ['./fotolist.component.css']
})
export class FotolistComponent implements OnInit {
  
  fotos: Foto[] = [];

    // Injeção de dependência é quando solicitamos uma ferramenta.
  // Toda injeção de dependência deve ser feita no parênteses do construtor.
  // Toda ferramenta precisa de alguém para usá-la (ex: esse alguém é a variável http).
  // Boa prática é declarar toda dependência dentro do construtor e deixá-lo privado.
  // chamando a ferramenta que usamos no constructor
  constructor(private banco: DatabaseService){ }

   // Se eu quiser que algo seja executado no início do componente, deve estar 
  // dentro do ngOnInit. Ele vai ser responsável por ir no banco de dados(get()), 
  // pegar as fotos(subscribe()-> autoriza que pegue as fotos), 
  
  
  ngOnInit(): void {
    this.banco.getFotos().subscribe(results => this.fotos = results); //GetFotos é o metodo que criamos no nosso serviço
  }

   // Vamos usar a ferramenta(componente) do httpclient no fotolist pois é ele 
  // que vai conectar com o banco de dados, pois ele depende disso para funcionar


  deletar(id:number){
    this.banco.delFotos(id);
    
  }
}