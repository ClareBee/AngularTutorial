import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  getItems() {
    return this.items;
  }

  addToCart(product) {
    this.items.push(product);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
