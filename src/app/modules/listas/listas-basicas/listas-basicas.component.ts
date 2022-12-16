import { Component, OnInit } from '@angular/core';

export type Producto = {
  name:string;
  price:number;
  description:string;
}

@Component({
  selector: 'app-listas-basicas',
  templateUrl: './listas-basicas.component.html',
  styleUrls: ['./listas-basicas.component.css']
})

export class ListasBasicasComponent implements OnInit {

  listaDeElementos:Producto[] = [
    {
      name: 'Leche',
      price: 20,
      description: 'Vaca'
    },
    {
      name: 'Verduras',
      price: 10,
      description: 'Tierra'
    },
    {
      name: 'Carne',
      price: 30,
      description: 'Animales'
    },
  ];

  opcion:number = 0;
  cargando:boolean = false;

  constructor() { }

  ngOnInit(): void {

  }
  cambiarCargando () {
    this.cargando = !this.cargando;
  }
  escogerOpcion(opcionEscogida:number){
    this.opcion = opcionEscogida;
  }

}
