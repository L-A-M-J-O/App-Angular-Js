import { Component } from '@angular/core';

interface Tarjeta {
  title: string;
  subTitle: string;
  telefono: Number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public ArregloTarjetas : Tarjeta[]=[];
  title = 'my-primera-app';

  ngOnInit(): void {

    this.ArregloTarjetas = [
      {title:'title1', subTitle:'subtitle1',telefono:33354},
      {title:'title2', subTitle:'subtitle2',telefono:354},
      {title:'title3', subTitle:'subtitle3',telefono:3354},
    ]
  }
}
