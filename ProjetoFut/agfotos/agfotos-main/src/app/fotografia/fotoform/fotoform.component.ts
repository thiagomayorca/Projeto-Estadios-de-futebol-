import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/servicos/database.service';



@Component({
  selector: 'app-fotoform',
  templateUrl: './fotoform.component.html',
  styleUrls: ['./fotoform.component.css']
})
export class FotoformComponent implements OnInit {

/*   httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }  */
  
  constructor( private banco: DatabaseService,
    private router: Router

    
    ) { }

  ngOnInit(): void {
    
  }

  submit(valor:any){
  
    this.banco.postFotos(valor.value); //estamos chamando o metodo 
    this.router.navigate(['/foto']);
    /* this.http.post('http://localhost:3000/fotos/', JSON.stringify(valor.value), this.httpOptions).subscribe(); */
  }
}
