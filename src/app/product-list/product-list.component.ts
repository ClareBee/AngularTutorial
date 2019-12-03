import { Component } from '@angular/core';

import { products } from '../products';

console.log(products)
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent {
  products = products;
  breakpoint;
  share() {
    window.alert("The product has been shared!");
  }
  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }
}
