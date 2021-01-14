import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['./fiche-produit.component.css'],
})

export class FicheProduitComponent implements OnInit {
  @Input() stock: string
  @Input() titre: string
  @Input() prix: number
  @Input() description: string
  @Input() categorie: string
  @Input() image: string
  @Input() id: number

  constructor() {}

  ngOnInit(): void {
    console.log(this.stock)
  }

  ajoutPanier() {
    console.log("Produit ajouté au panier")
  }
}
