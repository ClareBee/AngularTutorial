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

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 940) ? 1 : 4;
  }

  share() {
    window.alert("The product has been shared!");
  }

  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 940) ? 1 : 4;
  }
}
