import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['./fiche-produit.component.css'],
})

export class FicheProduitComponent implements OnInit {
  @Input() stock: number
  @Input() titre: string
  @Input() prix: number
  @Input() description: string
  @Input() categorie: string
  @Input() image: string
  @Input() id: number
  @Output() addToCartEvent: EventEmitter<object> = new EventEmitter<object>()

  constructor() {}

  ngOnInit(): void {
    // console.log(this.stock)
  }

  ajoutPanier() {
    console.log("Produit ajouté au panier")
    const product = {
      id: this.id,
      title: this.titre,
      price: this.prix,
      description: this.description,
      category: this.categorie,
      image: this.image,
      stock: this.stock,
    }
    this.addToCartEvent.emit(product)
  }
}
