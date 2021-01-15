import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  // template: "<p>Directement depuis le fichier .component.ts</p>",
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  bgColor: string = "purple"
  objStyle = {
    'background-color': this.bgColor,
    'color': "white"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
