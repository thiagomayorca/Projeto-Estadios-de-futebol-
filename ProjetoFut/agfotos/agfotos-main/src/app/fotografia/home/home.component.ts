import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imagemHome = "https://viagemegastronomia.cnnbrasil.com.br/wp-content/uploads/sites/5/2022/03/maracana-estadio-rio-de-janeiro.jpg?w=876&h=484&crop=1";
  constructor() { }

  ngOnInit(): void {
  }

}
