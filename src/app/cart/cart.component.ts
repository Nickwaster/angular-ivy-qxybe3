import { Component, OnInit, Input, Output, EventEmitter, DoCheck, OnDestroy } from '@angular/core';
import { Product } from "../product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy, DoCheck {
  @Input() cart: Product[];
  @Output() deleteProductEvent: EventEmitter<number> = new EventEmitter<number>();
  total: number = 0

  constructor() {}

  ngOnInit(): void {
    console.log("CartComponent va être rendu")
  }
  
  ngDoCheck() {
    console.log("Des changements on eu lieu")
    this.total = 0
    for (const product of this.cart) {
      this.total = this.total + product.price
    }
    console.log(this.total)
  }

  ngOnDestroy() {
    console.log("CartComponent va être détruit - disparaitre de la page")
  }

  deleteProduct(id: number): void {
    this.deleteProductEvent.emit(id)
  }
}
