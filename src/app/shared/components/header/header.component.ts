import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public image:string ='https://icones.pro/wp-content/uploads/2022/07/icone-angulaire-jaune.png';
  constructor() {}

  ngOnInit(): void {
  }
}
