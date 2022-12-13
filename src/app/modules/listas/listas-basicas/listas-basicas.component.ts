import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listas-basicas',
  templateUrl: './listas-basicas.component.html',
  styleUrls: ['./listas-basicas.component.css']
})
export class ListasBasicasComponent implements OnInit {

  listaDeElementos:string[] = ['Leche', 'Ternera', 'Verdura', 'Huevos'];

  cargando:boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  cambiarCargando () {
    this.cargando = !this.cargando;
  }

}
